export default {
  application: {
    volumeChanged: 'Application.OnVolumeChanged'
  },
  audio: {
    clean: {
      finished: 'AudioLibrary.OnCleanFinished',
      started: 'AudioLibrary.OnCleanStarted'
    },
    remove: 'AudioLibrary.OnRemove',
    scan: {
      finished: 'AudioLibrary.OnScanFinished',
      started: 'AudioLibrary.OnScanStarted'
    },
    update: 'AudioLibrary.OnUpdate'
  },
  input: {
    finished: 'Input.OnInputFinished',
    requested: ' Input.OnInputRequested'
  },
  player: {
    pause: 'Player.OnPause',
    play: 'Player.OnPlay',
    property: {
      changed: 'Player.OnPropertyChanged'
    },
    seek: 'Player.OnSeek',
    speed: {
      changed: 'Player.OnSpeedChanged'
    },
    stop: 'Player.OnStop'
  },
  playlist: {
    add: 'Playlist.OnAdd',
    clear: 'Playlist.OnClear',
    remove: 'Playlist.OnRemove'
  },
  system: {
    lowBattery: 'System.OnLowBattery',
    quit: 'System.OnQuit',
    restart: 'System.OnRestart',
    sleep: 'System.OnSleep',
    wake: 'System.OnWake'
  },
  video: {
    clean: {
      finished: 'VideoLibrary.OnCleanFinished',
      started: 'VideoLibrary.OnCleanStarted'
    },
    remove: 'VideoLibrary.OnRemove',
    scan: {
      finished: 'VideoLibrary.OnScanFinished',
      started: 'VideoLibrary.OnScanStarted'
    },
    update: 'VideoLibrary.OnUpdate'
  }
};
