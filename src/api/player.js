export default function () {
  const open = (item, options)=> this.rpc.call('Player.Open', {item, options});
  open.playlist = (playlistid, position, options)=> this.player.open({playlistid, position}, options);
  open.directory = (path, recursive, options)=> this.player.open({path, recursive}, options);
  open.smartPlaylist = (path, options)=> this.player.open({partymode: path}, options);
  open.smartMusic = (options)=> this.player.open({partymode: 'music'}, options);
  open.smartVideo = (options)=> this.player.open({partymode: 'video'}, options);
  open.channel = (channelid, options)=> this.player.open({channelid}, options);
  open.item = {

  };

  const move = (playerid, direction)=> this.rpc.call('Player.Move', {playerid, direction});
  move.up = (playerid)=> this.player.move(playerid, 'up');
  move.down = (playerid)=> this.player.move(playerid, 'down');
  move.left = (playerid)=> this.player.move(playerid, 'left');
  move.right = (playerid)=> this.player.move(playerid, 'right');

  return {
    getActivePlayers: ()=> this.rpc.call('Player.GetActivePlayers'),

    getItem: (playerid, fields)=> this.rpc.call('Player.GetItem', {playerid, properties: fields}),

    getProperties: (playerid, properties = [])=> this.rpc.call('Player.GetProperties', {playerid, properties}),

    goTo: (playerid, to)=> this.rpc.call('Player.GoTo', {playerid, to}),

    next: (playerid)=> this.player.goTo(playerid, 'next'),

    previous: (playerid)=> this.player.goTo(playerid, 'previous'),

    move: move,

    open: open,

    openItem: ()=> {
      // TODO
    },

    playPause: (playerid, play)=> this.rpc.call('Player.PlayPause', {playerid, play}),

    play: (playerid)=> this.player.playPause(playerid, true),

    pause: (playerid)=> this.player.playPause(playerid, false),

    toggle: (playerid)=> this.player.playPause(playerid, 'toggle'),

    rotate: (playerid, direction)=> this.rpc.call('Player.Rotate', {playerid, value: direction}),

    rotateLeft: (playerid)=> this.player.rotate(playerid, 'counterclockwise'),

    rotateRight: (playerid)=> this.player.rotate(playerid, 'clockwise'),

    seek: (playerid, value)=> this.rpc.call('Player.Seek', {playerid, value}),

    seekPercentage: (playerid, percentage)=> this.player.seek(playerid, percentage),

    seekTime: (playerid, hours, minutes, seconds, milliseconds)=> this.player.seek(playerid, {hours, minutes, seconds, milliseconds}),

    seekSeconds: (playerid, seconds)=> this.player.seek(playerid, utils.secondsToTime(seconds)),

    seekSmallForward: (playerid)=> this.player.seek(playerid, 'smallforward'),

    seekSmallBackward: (playerid)=> this.player.seek(playerid, 'smallbackward'),

    seekBigForward: (playerid)=> this.player.seek(playerid, 'bigforward'),

    seekBigBackward: (playerid)=> this.player.seek(playerid, 'bigbackward')
  };
};
