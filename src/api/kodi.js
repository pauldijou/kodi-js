export default function () {
  return {
    getInfoBooleans: (booleans)=> this.rpc.call('XBMC.GetInfoBooleans', {booleans}),
    
    getInfoLabels: (labels)=> this.rpc.call('XBMC.GetInfoLabels', {labels})
  };
}
