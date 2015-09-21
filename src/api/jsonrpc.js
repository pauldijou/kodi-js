export default function () {
  return {
    // getConfiguration: ()=> this.rpc.call('JSONRPC.GetConfiguration', {}),
    getConfiguration: ()=> { throw new Error('JSONRPC.GetConfiguration is not supported through HTTP') },

    introspect: (getdescriptions, getmetadata, filterbytransport, filter)=> this.rpc.call('JSONRPC.Introspect', {getdescriptions, getmetadata, filterbytransport, filter}),

    notifyAll: (sender, message, data)=> this.rpc.call('JSONRPC.NotifyAll', {sender, message, data}),

    permission: ()=> this.rpc.call('JSONRPC.Permission', {}),

    ping: ()=> this.rpc.call('JSONRPC.Ping', {}),

    // setConfiguration: (notifications)=> this.rpc.call('JSONRPC.SetConfiguration', {notifications}),
    setConfiguration: (notifications)=> { throw new Error('JSONRPC.setConfiguration is not supported through HTTP') },

    version: ()=> this.rpc.call('JSONRPC.Version', {})
  };
}
