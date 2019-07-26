import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css';
import Aside from './mod/aside';
import Controller from './mod/controller';
import Main from './view/routes';


const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Aside />
                <Main />
                <Controller />
            </HashRouter>
        </div>
    );
}

export default App;
