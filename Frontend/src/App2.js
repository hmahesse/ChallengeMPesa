import React from 'react';

import {Router } from 'react-router-dom';

import Routes from './routess';
import history from './history';

import {AuthContext} from './authContext';

export default function App2(){
    return(
        <AuthContext>
            <Router history={history}>
                <Routes />
            </Router>
        </AuthContext>
    )
}