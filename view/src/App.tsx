import React from 'react';
import { HashRouter } from 'react-router-dom';
import Aside from './mods/aside';
import Topbar from './mods/topbar';
import Controller from './mods/controller';
import Main from './page/routes';


const App: React.FC = () => {
    return (
        <div className="app-root">
            <HashRouter>
                <Topbar />
                <Aside />
                <Main />
                <Controller />
            </HashRouter>
        </div>
    );
}

export default App;
