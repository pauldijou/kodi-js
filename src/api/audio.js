const setFields = {
  Album: ['title', 'artist', 'description', 'genre', 'theme', 'mood', 'style', 'type', 'albumlabel', 'rating', 'year'],
  Artist: ['artist', 'instrument', 'style', 'mood', 'born', 'formed', 'description', 'genre', 'died', 'disbanded', 'yearsactive'],
  Song: ['title', 'artist', 'albumartist', 'genre', 'year', 'rating', 'album', 'track', 'disc', 'duration', 'comment', 'musicbrainztrackid', 'musicbrainzartistid', 'musicbrainzalbumid', 'musicbrainzalbumartistid']
};

export default function () {
  return {
    clean: ()=> this.rpc.call('AudioLibrary.Clean', {}),

    export: (options)=> this.rpc.call('AudioLibrary.Export', {options}),

    getAlbumDetails: (albumid, properties)=> this.rpc.call('AudioLibrary.GetAlbumDetails', {albumid , properties}),

    getAlbums: (properties, limits, sort, filter)=> this.rpc.call('AudioLibrary.GetAlbums', {properties, limits, sort, filter}),

    getArtistDetails: (artistid, properties)=> this.rpc.call('AudioLibrary.GetArtistDetails', {artistid, properties}),

    getArtists: (albumartistsonly, properties, limits, sort, filter)=> this.rpc.call('AudioLibrary.GetArtists', {albumartistsonly, properties, limits, sort, filter}),

    getGenres: (properties, limits, sort)=> this.rpc.call('AudioLibrary.GetGenres', {properties, limits, sort}),

    getRecentlyAddedAlbums: (properties, limits, sort)=> this.rpc.call('AudioLibrary.GetRecentlyAddedAlbums', {properties, limits, sort}),

    getRecentlyAddedSongs: (albumlimit, properties, limits)=> this.rpc.call('AudioLibrary.GetRecentlyAddedSongs', {albumlimit, properties, limits}),

    getRecentlyPlayedAlbums: (properties, limits, sort)=> this.rpc.call('AudioLibrary.GetRecentlyPlayedAlbums', {properties, limits, sort}),

    getRecentlyPlayedSongs: (properties, limits, sort)=> this.rpc.call('AudioLibrary.GetRecentlyPlayedSongs', {properties, limits, sort}),

    getSongDetails: (songid, properties)=> this.rpc.call('AudioLibrary.GetSongDetails', {songid, properties}),

    getSongs: (properties, limits, sort, filter)=> this.rpc.call('AudioLibrary.GetSongs', {properties, limits, sort, filter}),

    scan: (directory)=> this.rpc.call('AudioLibrary.Scan', {directory}),

    setAlbumDetails: (albumid, {title, artist, description, genre, theme, mood, style, type, albumlabel, rating, year})=> this.rpc.call('AudioLibrary.SetAlbumDetails', {albumid, title, artist, description, genre, theme, mood, style, type, albumlabel, rating, year}),

    setArtistDetails: (artistid, {artist, instrument, style, mood, born, formed, description, genre, died, disbanded, yearsactive})=> this.rpc.call('AudioLibrary.SetArtistDetails', {artistid, artist, instrument, style, mood, born, formed, description, genre, died, disbanded, yearsactive}),

    setSongDetails: (songid, {title, artist, albumartist, genre, year, rating, album, track, disc, duration, comment, musicbrainztrackid, musicbrainzartistid, musicbrainzalbumid, musicbrainzalbumartistid})=> this.rpc.call('AudioLibrary.SetSongDetails', {songid, title, artist, albumartist, genre, year, rating, album, track, disc, duration, comment, musicbrainztrackid, musicbrainzartistid, musicbrainzalbumid, musicbrainzalbumartistid}),

    // this.audio.set.song.title(1, 'New Title')
    set: Object.keys(setFields).reduce((types, type)=> {
      types[type.toLowerCase()] = setFields[type].reduce((fields, field)=> {
        fields[field] = (songid, value)=> this.audio['set' + type + 'Details'](songid, { [field]: value });
        return fields;
      }, {});
      return types;
    }, {})
  };
}
