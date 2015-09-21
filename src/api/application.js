export default function () {
  return {
    getProperties: (properties)=> this.rpc.call('Application.GetProperties', {properties}),

    getVolume: ()=> this.application.getProperties(['volume']),

    isMuted: ()=> this.application.getProperties(['muted']),

    getName: ()=> this.application.getProperties(['name']),

    getVersion: ()=> this.application.getProperties(['version']),

    quit: ()=> this.rpc.call('Application.Quit', {}),

    setMute: (mute)=> this.rpc.call('Application.SetMute', {mute}),

    mute: ()=> this.application.setMute(true),

    unmute: ()=> this.application.setMute(false),

    toggleMute: ()=> this.application.setMute('toggle'),

    setVolume: (volume)=> this.rpc.call('Application.SetVolume', {volume}),

    incrementVolume: ()=> this.application.setVolume('increment'),

    decrementVolume: ()=> this.application.setVolume('decrement')
  };
}
