export default function () {
  return {
    executeAddon: (addonid, params, wait)=> this.rpc.call('Addons.ExecuteAddon', {addonid, params, wait}),

    getAddonDetails: (addonid, properties)=> this.rpc.call('Addons.GetAddonDetails', {addonid, properties}),

    getAddons: (type, content, enabled, properties, limits)=> this.rpc.call('Addons.GetAddons', {type, content, enabled, properties, limits}),

    setAddonEnabled: (addonid, enabled)=> this.rpc.call('Addons.SetAddonEnabled', {addonid, enabled}),

    enableAddon: (addonid)=> this.addons.setAddonEnabled(addonid, true),

    disableAddon: (addonid)=> this.addons.setAddonEnabled(addonid, false),

    toggleAddon: (addonid)=> this.addons.setAddonEnabled(addonid, 'toggle')
  };
}
