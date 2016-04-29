import HTTP from './http';
import RPC from './rpc';
import WS from './ws';
import * as utils from './utils';
import api from './api';
import types from './types';

export default function (global) {
  return class Kodi {
    constructor ({address, port, username, password, method = 'POST', request, fetch, Promise, notify = true}) {
      this.Promise = Promise || global.Promise;

      if (request) {
        if (!this.Promise) {
          throw new TypeError('Need a Promise implementation to work.');
        }

        this.http = new HTTP({Promise: this.Promise, request});
      } else if (fetch) {
        this.http = new HTTP({fetch});
      } else if (global.fetch) {
        this.http = new HTTP({fetch: global.fetch});
      }

      if (!this.http) {
        throw new TypeError('Need a way to do HTTP requests.');
      }

      this.address = address;
      this.port = port;

      this.url = 'http://' + this.address + (this.port.http ? ':' + this.port.http : '');
      this.rpc = new RPC({url: this.url, username, password, http: this.http, method});

      this.types = types;

      // Assign all APIs to the current isntance
      Object.keys(api).forEach((key)=> {
        if (this[key] !== undefined) {
          throw new TypeError('[' + key + '] API key is already used inside Kodi instance.');
        }
        this[key] = api[key].call(this);
      });

      // Assign websocket methods to the current instance
      WS(this, {notify, username, password});
    }
  };
}
