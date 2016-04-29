const add = (playlistid, item)=> this.rpc.call('Playlist.Add', {playlistid, item});
add.file = (playlistid, path)=> this.playlist.add(playlistid, { file: path });
add.directory = (playlistid, path)=> this.playlist.add(playlistid, { directory: path });
add.movie = (playlistid, movieid)=> this.playlist.add(playlistid, { movieid });
add.episode = (playlistid, episodeid)=> this.playlist.add(playlistid, { episodeid });
add.music = (playlistid, musicvideoid)=> this.playlist.add(playlistid, { musicvideoid });
add.video = (playlistid, musicvideoid)=> this.playlist.add(playlistid, { musicvideoid });
add.artist = (playlistid, artistid)=> this.playlist.add(playlistid, { artistid });
add.album = (playlistid, albumid)=> this.playlist.add(playlistid, { albumid });
add.song = (playlistid, songid)=> this.playlist.add(playlistid, { songid });
add.genre = (playlistid, genreid)=> this.playlist.add(playlistid, { genreid });

const insert = (playlistid, position, item)=> this.rpc.call('Playlist.Insert', {playlistid, position, item});
insert.file = (playlistid, path)=> this.playlist.insert(playlistid, { file: path });
insert.directory = (playlistid, path)=> this.playlist.insert(playlistid, { directory: path });
insert.movie = (playlistid, movieid)=> this.playlist.insert(playlistid, { movieid });
insert.episode = (playlistid, episodeid)=> this.playlist.insert(playlistid, { episodeid });
insert.music = (playlistid, musicvideoid)=> this.playlist.insert(playlistid, { musicvideoid });
insert.video = (playlistid, musicvideoid)=> this.playlist.insert(playlistid, { musicvideoid });
insert.artist = (playlistid, artistid)=> this.playlist.insert(playlistid, { artistid });
insert.album = (playlistid, albumid)=> this.playlist.insert(playlistid, { albumid });
insert.song = (playlistid, songid)=> this.playlist.insert(playlistid, { songid });
insert.genre = (playlistid, genreid)=> this.playlist.insert(playlistid, { genreid });

export default function () {
  return {
    add: add,

    clear: (playlistid)=> this.rpc.call('Playlist.Clear', {playlistid}),

    getItems: (playlistid, properties, limits, sort)=> this.rpc.call('Playlist.GetItems', {playlistid, properties, limits, sort}),

    getPlaylists: ()=> this.rpc.call('Playlist.GetPlaylists', {}),

    getProperties: (playlistid, properties)=> this.rpc.call('Playlist.GetProperties', {playlistid, properties}),

    insert: insert,

    remove: (playlistid, position)=> this.rpc.call('Playlist.Remove', {playlistid, position}),

    swap: (playlistid, position1, position2)=> this.rpc.call('Playlist.Swap', {playlistid, position1, position2})
  };
}
