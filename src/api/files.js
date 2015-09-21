export default function () {
  return {
    // download: (path)=> this.rpc.call('Files.Download', {path}),
    download: (path)=> { throw new Error('Files.Download is not supported through HTTP') },

    getDirectory: (directory, media, properties, sort)=> this.rpc.call('Files.GetDirectory', {directory, media, properties, sort}),

    getFileDetails: (file, media, properties)=> this.rpc.call('Files.GetFileDetails', {file, media, properties}),

    getSources: (media, limits, sort)=> this.rpc.call('Files.GetSources', {media, limits, sort}),

    prepareDownload: (path)=> this.rpc.call('Files.PrepareDownload', {path})
  };
}
