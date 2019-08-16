import React from 'react';
import { Route } from 'react-router-dom';
import musicDownload from  './music-download';
import musicHistory from  './music-history';
import musicFavorite from  './music-favorite';
import musicLocal from  './music-local';

const View: React.FC = () => {
  return (
    <React.Fragment>
        <Route exact path="/" component={musicLocal} />
        <Route exact path="/my-music/download" component={musicDownload} />
        <Route exact path="/my-music/history" component={musicHistory} />
        <Route exact path="/my-music/favorite" component={musicFavorite} />
        <Route exact path="/my-music/local" component={musicLocal} />
    </React.Fragment>
  );
}

export default View;
