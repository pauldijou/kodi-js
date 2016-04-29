import types from '../types';

export default function () {
  return {
    ejectOpticalDrive: ()=> this.rpc.call('System.EjectOpticalDrive', {}),

    getProperties: (properties)=> this.rpc.call('System.GetProperties', {properties}),

    can: types.system.property.name.filter(p=> p.indexOf('can') === 0).reduce((can, prop)=> {
      can[prop.slice(3)] = ()=> this.system.getProperties([prop]);
      return can;
    }, {}),

    hibernate: ()=> this.rpc.call('System.Hibernate', {}),

    reboot: ()=> this.rpc.call('System.Reboot', {}),

    shutdown: ()=> this.rpc.call('System.Shutdown', {}),

    suspend: ()=> this.rpc.call('System.Suspend', {})
  };
}
