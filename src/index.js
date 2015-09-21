import HTTP from './http';
import RPC from './rpc';
import * as utils from './utils';
import * as api from './api';
import types from './types';

export default function (global) {
  return class Kodi {
    constructor ({address, port, username, password, method = 'POST', request, fetch, Promise}) {
      this.Promise = Promise || global.Promise;

      if (request) {
        if (!this.Promise) {
          throw new Error('Need a Promise implementation to work.');
        }

        this.http = new HTTP({Promise: this.Promise, request});
      } else if (fetch) {
        this.http = new HTTP({fetch});
      } else if (global.fetch) {
        this.http = new HTTP({fetch: global.fetch});
      }

      if (!this.http) {
        throw new Error('New a way to do HTTP requests.');
      }

      this.url = address + (port ? ':' + port : '');
      this.rpc = new RPC({url: this.url, username, password, http: this.http, method});

      this.types = types;

      Object.keys(api).forEach((key)=> {
        if (this[key] !== undefined) {
          throw new Error('[' + key + '] API key is already used inside Kodi instance.');
        }

        this[key] = api[key].call(this);
      });
    }
  };
}
