export default function () {
  return {
    toto: ()=> this.rpc.call('METHOD', {})
  };
}
