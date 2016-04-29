const setFields = {
  Episode: ['title', 'playcount', 'runtime', 'director', 'plot', 'rating', 'votes', 'lastplayed', 'writer', 'firstaired', 'productioncode', 'season', 'episode', 'originaltitle', 'thumbnail', 'fanart', 'art'],
  Movie: ['title', 'playcount', 'runtime', 'director', 'studio', 'year', 'plot', 'genre', 'rating', 'mpaa', 'imdbnumber', 'votes', 'lastplayed', 'originaltitle', 'trailer', 'tagline', 'plotoutline', 'writer', 'country', 'top250', 'sorttitle', 'set', 'showlink', 'thumbnail', 'fanart', 'tag', 'art'],
  MusicVideo: ['title', 'playcount', 'runtime', 'director', 'studio', 'year', 'plot', 'album', 'artist', 'genre', 'track', 'lastplayed', 'thumbnail', 'fanart', 'tag', 'art'],
  TVShow: ['title', 'playcount', 'studio', 'plot', 'genre', 'rating', 'mpaa', 'imdbnumber', 'premiered', 'votes', 'lastplayed', 'originaltitle', 'sorttitle', 'episodeguide', 'thumbnail', 'fanart', 'tag', 'art']
};

export default function () {
  return {
    clean: ()=> this.rpc.call('VideoLibrary.Clean', {}),

    'export': (options)=> this.rpc.call('VideoLibrary.Export', {options}),

    getEpisodeDetails: (episodeid, properties)=> this.rpc.call('VideoLibrary.GetEpisodeDetails', {episodeid, properties}),

    getEpisodes: (tvshowid, season, properties, limits, sort, filter)=> this.rpc.call('VideoLibrary.GetEpisodes', {tvshowid, season, properties, limits, sort, filter}),

    getGenres: (type, properties, limits, sort)=> this.rpc.call('VideoLibrary.GetGenres', {type, properties, limits, sort}),

    getMovieDetails: (movieid, properties)=> this.rpc.call('VideoLibrary.GetMovieDetails', {movieid, properties}),

    getMovieSetDetails: (setid, properties, movies)=> this.rpc.call('VideoLibrary.GetMovieSetDetails', {setid, properties, movies}),

    getMovieSets: (properties, limits, sort)=> this.rpc.call('VideoLibrary.GetMovieSets', {properties, limits, sort}),

    getMovies: (properties, limits, sort, filter)=> this.rpc.call('VideoLibrary.GetMovies', {properties, limits, sort, filter}),

    getMusicVideoDetails: (musicvideoid, properties)=> this.rpc.call('VideoLibrary.GetMusicVideoDetails', {musicvideoid, properties}),

    getMusicVideos: (properties, limits, sort, filter)=> this.rpc.call('VideoLibrary.GetMusicVideos', {properties, limits, sort, filter}),

    getRecentlyAddedEpisodes: (properties, limits, sort)=> this.rpc.call('VideoLibrary.GetRecentlyAddedEpisodes', {properties, limits, sort}),

    getRecentlyAddedMovies: (properties, limits, sort)=> this.rpc.call('VideoLibrary.GetRecentlyAddedMovies', {properties, limits, sort}),

    getRecentlyAddedMusicVideos: (properties, limits, sort)=> this.rpc.call('VideoLibrary.GetRecentlyAddedMusicVideos', {properties, limits, sort}),

    getSeasons: (tvshowid, properties, limits, sort)=> this.rpc.call('VideoLibrary.GetSeasons', {tvshowid, properties, limits, sort}),

    getTVShowDetails: (tvshowid, properties)=> this.rpc.call('VideoLibrary.GetTVShowDetails', {tvshowid, properties}),

    getTVShows: (properties, limits, sort, filter)=> this.rpc.call('VideoLibrary.GetTVShows', {properties, limits, sort, filter}),

    removeEpisode: (episodeid)=> this.rpc.call('VideoLibrary.RemoveEpisode', {episodeid}),

    removeMovie: (movieid)=> this.rpc.call('VideoLibrary.RemoveMovie', {movieid}),

    removeMusicVideo: (musicvideoid)=> this.rpc.call('VideoLibrary.RemoveMusicVideo', {musicvideoid}),

    removeTVShow: (tvshowid)=> this.rpc.call('VideoLibrary.RemoveTVShow', {tvshowid}),

    scan: (directory)=> this.rpc.call('VideoLibrary.Scan', {directory}),

    setEpisodeDetails: (episodeid, {title, playcount, runtime, director, plot, rating, votes, lastplayed, writer, firstaired, productioncode, season, episode, originaltitle, thumbnail, fanart, art})=> this.rpc.call('VideoLibrary.SetEpisodeDetails', {episodeid, title, playcount, runtime, director, plot, rating, votes, lastplayed, writer, firstaired, productioncode, season, episode, originaltitle, thumbnail, fanart, art}),

    setMovieDetails: (movieid, {title, playcount, runtime, director, studio, year, plot, genre, rating, mpaa, imdbnumber, votes, lastplayed, originaltitle, trailer, tagline, plotoutline, writer, country, top250, sorttitle, set, showlink, thumbnail, fanart, tag, art})=> this.rpc.call('VideoLibrary.SetMovieDetails', {movieid, title, playcount, runtime, director, studio, year, plot, genre, rating, mpaa, imdbnumber, votes, lastplayed, originaltitle, trailer, tagline, plotoutline, writer, country, top250, sorttitle, set, showlink, thumbnail, fanart, tag, art}),

    setMusicVideoDetails: (musicvideoid, {title, playcount, runtime, director, studio, year, plot, album, artist, genre, track, lastplayed, thumbnail, fanart, tag, art})=> this.rpc.call('VideoLibrary.SetMusicVideoDetails', {musicvideoid, title, playcount, runtime, director, studio, year, plot, album, artist, genre, track, lastplayed, thumbnail, fanart, tag, art}),

    setTVShowDetails: (tvshowid, {title, playcount, studio, plot, genre, rating, mpaa, imdbnumber, premiered, votes, lastplayed, originaltitle, sorttitle, episodeguide, thumbnail, fanart, tag, art})=> this.rpc.call('VideoLibrary.SetTVShowDetails', {tvshowid, title, playcount, studio, plot, genre, rating, mpaa, imdbnumber, premiered, votes, lastplayed, originaltitle, sorttitle, episodeguide, thumbnail, fanart, tag, art}),

    // this.video.set.movie.title(1, 'New Title')
    'set': Object.keys(setFields).reduce((types, type)=> {
      types[type.toLowerCase()] = setFields[type].reduce((fields, field)=> {
        fields[field] = (songid, value)=> this.audio['set' + type + 'Details'](songid, { [field]: value });
        return fields;
      }, {});
      return types;
    }, {})
  };
}
