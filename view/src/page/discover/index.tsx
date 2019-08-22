import React from 'react';
import Main from '@coms/main';
// section
import Banner from './banner';
import PlayList from './recommend-playlist';
import PrivateContent from './private-content';
import NewSong from './new-song';
import MV from './recommend-mv';

class View extends React.Component {
    render () {
        return (
            <Main className="discover">
                <Banner />
                <PlayList />
                <PrivateContent />
                <NewSong />
                <MV />
            </Main>
          );
    }
}

export default View;
