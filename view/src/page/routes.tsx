import React from 'react';
import { Route } from 'react-router-dom';
// page
import pageDiscover from './discover';
import pageFavorite from './favorite';
import pageFriends from './friends';
import pagePlaylist from './playlist';
import pageVideo from './video';
import pageDownload from './download';
import pageFm from './fm';
import pageLocal from './local';


const View: React.FC = () => {
  return (
    <React.Fragment>
        <Route exact path="/" component={pageDiscover} />
        <Route path="/discover" component={pageDiscover} />
        <Route exact path="/favorite" component={pageFavorite} />
        <Route exact path="/friends" component={pageFriends} />
        <Route exact path="/playlist" component={pagePlaylist} />
        <Route exact path="/video" component={pageVideo} />
        <Route exact path="/download" component={pageDownload} />
        <Route exact path="/fm" component={pageFm} />
        <Route exact path="/local" component={pageLocal} />
    </React.Fragment>
  );
}

export default View;
