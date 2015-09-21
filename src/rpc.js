export default class RPC {
  constructor ({url, username, password, http, method}) {
    this.id = 0;
    this.url = url + '/jsonrpc';
    this.username = username;
    this.password = password;
    this.method = method;
    this.http = http;
  }

  call (method, params) {
    if (this.id >= Number.MAX_SAFE_INTEGER) {
      this.id = 0;
    }

    const body = {
      jsonrpc: '2.0',
      id: ++this.id,
      method: method,
      params: params
    };

    const headers = {
      'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
    };

    if (this.method.toLowerCase() === 'post') {
      headers['Content-Type'] = 'application/json';
      return this.http.post(this.url, body, headers);
    } else {
      return this.http.get(this.url + '?request=' + encodeURIComponent(JSON.stringify(body)), headers);
    }
  }
}
