import React from 'react';
// section
import Banner from './banner';
import PlayList from './recommend-playlist';
import PrivateContent from './private-content';
import NewSong from './new-song';
import MV from './recommend-mv';
import DJprogram from './djprogram';

class View extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Banner />
                <PlayList />
                <PrivateContent />
                <NewSong />
                <MV />
                <DJprogram />
            </React.Fragment>
          );
    }
}

export default View;
