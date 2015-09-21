import types from '../types';

export default function () {
  return {
    activateWindow: (window, parameters)=> this.rpc.call('GUI.ActivateWindow', {window, parameters}),

    activate: types.gui.window.reduce((windows, win)=> {
      windows[win] = (parameters)=> this.gui.activateWindow(win, parameters);
      return windows;
    }, {}),

    getProperties: (properties)=> this.rpc.call('GUI.GetProperties', {properties}),

    getCurrentWindow: ()=> this.gui.getProperties(['currentwindow']),

    getCurrentControl: ()=> this.gui.getProperties(['currentcontrol']),

    getSkin: ()=> this.gui.getProperties(['skin']),

    isFullscreen: ()=> this.gui.getProperties(['fullscreen']),

    setFullscreen: (fullscreen)=> this.rpc.call('GUI.SetFullscreen', {fullscreen}),

    fullscreen: ()=> this.gui.setFullscreen(true),

    windowed: ()=> this.gui.setFullscreen(false),

    toggleFullscreen: ()=> this.gui.setFullscreen('toggle'),

    showNotification: (title, message, image, displaytime)=> this.rpc.call('GUI.ShowNotification', {title, message, image, displaytime}),

    showInfo: (title, message, displaytime)=> this.gui.showNotification(title, message, 'info', displaytime),

    showWarning: (title, message, displaytime)=> this.gui.showNotification(title, message, 'warning', displaytime),

    showError: (title, message, displaytime)=> this.gui.showNotification(title, message, 'error', displaytime)
  };
}
