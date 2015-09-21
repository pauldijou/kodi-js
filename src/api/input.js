import types from '../types';

export default function () {
  return {
    back: ()=> this.rpc.call('Input.Back'),

    contextMenu: ()=> this.rpc.call('Input.ContextMenu'),

    down: ()=> this.rpc.call('Input.Down'),

    executeAction: (action)=> this.rpc.call('Input.ExecuteAction', {action}),

    execute: types.input.action.reduce((actions, action)=> {
      actions[action] = ()=> this.input.executeAction(action);
      return actions;
    }, {}),

    home: ()=> this.rpc.call('Input.Home'),

    info: ()=> this.rpc.call('Input.Info'),

    left: ()=> this.rpc.call('Input.Left'),

    right: ()=> this.rpc.call('Input.Right'),

    sendText: (text, done)=> this.rpc.call('Input.SendText', {text, done}),

    showCodec: ()=> this.rpc.call('Input.ShowCodec'),

    showOSD: ()=> this.rpc.call('Input.ShowOSD'),

    up: ()=> this.rpc.call('Input.Up')
  };
}
