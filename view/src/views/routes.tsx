import React from 'react';
import { Route } from 'react-router-dom';
import PageDownload from  './download';
import PageHistory from  './history';
import PageFavorite from  './favorite';
import PageLocal from  './local';

const View: React.FC = () => {
  return (
    <React.Fragment>
        <Route exact path="/" component={PageLocal} />
        <Route exact path="/download" component={PageDownload} />
        <Route exact path="/history" component={PageHistory} />
        <Route exact path="/favorite" component={PageFavorite} />
        <Route exact path="/local" component={PageLocal} />
    </React.Fragment>
  );
}

export default View;
