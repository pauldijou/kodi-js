const record = (record, channel)=> this.rpc.call('PVR.Record', {record, channel});
record.start = (channel)=> this.pvr.record(true, channel);
record.stop = (channel)=> this.pvr.record(false, channel);
record.toggle = (channel)=> this.pvr.record('toggle', channel);

export default function () {
  return {
    getChannelDetails: (channelid, properties)=> this.rpc.call('PVR.GetChannelDetails', {channelid, properties}),

    getChannelGroupDetails: (channelgroupid, channels)=> this.rpc.call('PVR.GetChannelGroupDetails', {channelgroupid, channels}),

    getChannelGroups: (channeltype, limits)=> this.rpc.call('PVR.GetChannelGroups', {channeltype, limits}),

    getChannels: (channelgroupid, properties, limits)=> this.rpc.call('PVR.GetChannels', {channelgroupid, properties, limits}),

    getProperties: (properties)=> this.rpc.call('PVR.GetProperties', {properties}),

    record: record,

    scan: ()=> this.rpc.call('PVR.Scan', {})
  };
}
