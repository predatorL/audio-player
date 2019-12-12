import React from 'react';
import Main from '@coms/main';
import {Route} from 'react-router-dom';
// section
import Personalized from './personalized';


class View extends React.Component {
    render () {
        return (
            <Main className="discover">
                <Route exact path="/" component={Personalized} />
                <Route exact path="/discover" component={Personalized} />
                <Route exact path="/discover/personalized" component={Personalized} />
            </Main>
          );
    }
}

export default View;
