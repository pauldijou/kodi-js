import WebSocket from 'ws';
import notifications from './notifications';

class Notification {
  constructor (data) {
    this.jsonrpc = data.jsonrpc;
    this.method = data.method;
    this.data = (data.params && data.params.data) || undefined;
    this.sender = (data.params && data.params.sender);
    this.native = this.method.indexOf('Other') < 0;
    this.timestamp = (new Date()).getTime();
  }
}

export default function (instance, {notify, username, password}) {
  if (!notify) {
    return;
  }

  if (typeof notify !== 'function') {
    notify = function () {};
  }

  const notificationListeners = {};

  function addNotificationListener(event, callback) {
    if (!notificationListeners[event]) {
      notificationListeners[event] = [];
    }
    notificationListeners[event].push(callback);
  }

  function addOnMethods (level, methods) {
    Object.keys(methods).forEach(name=> {
      const method = methods[name];

      if (level[name] !== undefined) {
        throw new TypeError('['+ name +'] already used inside Kodi.on');
      }

      if (typeof method === 'string') {
        level[name] = function (callback) {
          addNotificationListener(method, callback);
        }
      } else {
        level[name] = {};
        addOnMethods(level[name], method);
      }
    });
  }

  function broadcast (method, message) {
    if (notificationListeners[method]) {
      notificationListeners[method].forEach(listener=> {
        listener.call(null, message);
      });
    }
  }

  instance.on = {};

  instance.on.open = function (callback) {
    addNotificationListener('WS.Open', callback);
  };

  instance.on.message = function (callback) {
    addNotificationListener('WS.Message', callback);
  };

  instance.on.error = function (callback) {
    addNotificationListener('WS.Error', callback);
  };

  instance.on.close = function (callback) {
    addNotificationListener('WS.Close', callback);
  };

  instance.on.other = function (callback) {
    addNotificationListener('Other', callback);
  };

  addOnMethods(instance.on, notifications);

  const wsURL = 'ws://' + username + ':' + password + '@' + instance.address + (instance.port.tcp ? ':' + instance.port.tcp : '');

  instance.socket = new WebSocket(wsURL);

  instance.socket.onopen = function () {
    broadcast('WS.Open');
    notify({
      event: 'open'
    });
  };

  instance.socket.onmessage = function(message) {
    broadcast('WS.Message', message);
    let notification;

    try {
      const data = message.data || message;
      notification = new Notification(JSON.parse(data));

      if (notification.native) {
        broadcast(notification.method, notification);
      } else {
        broadcast('Other', notification);
      }
    } catch (error) {}

    notify({
      event: 'message',
      message,
      notification
    });
  };

  instance.socket.onclose = function () {
    broadcast('WS.Close');
    notify({
      event: 'close'
    });
  };

  instance.socket.onerror = function (error) {
    broadcast('WS.Error', error);
    notify({
      event: 'error',
      error: error
    });
  };
};
