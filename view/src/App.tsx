import React from 'react';
import { HashRouter } from 'react-router-dom';
import Aside from './mods/aside';
import Controller from './mods/controller';
import Main from './page/routes';


const App: React.FC = () => {
    return (
        <div className="app-root">
            <HashRouter>
                <Aside />
                <Main />
                <Controller />
            </HashRouter>
        </div>
    );
}

export default App;
