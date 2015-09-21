export default class HTTP {
  constructor ({fetch, request, Promise}) {
    if (fetch) {
      this.call = function ({url, method, headers = {}, body}) {
        return fetch(url, {method, headers, body: JSON.stringify(body)});
      };
    } else if (request && Promise) {
      this.call = function ({url, method, headers = {}, body}) {
        return new Promise((resolve, reject)=> {
          request({url, method, headers, body, json: true}, (error, response, body)=> {
            if (error) {
              reject(error);
            } else {
              resolve(response);
            }
          });
        });
      };
    } else {
      throw new Error('Could not init HTTP');
    }

    this.get = function (url, headers) {
      return this.call({url, method: 'GET', headers});
    };

    this.post = function (url, body, headers) {
      return this.call({url, method: 'POST', headers, body});
    };
  }
};
