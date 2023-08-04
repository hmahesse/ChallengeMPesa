import React,{useContext} from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';


import App from './App';
import {Context} from './authContext';

function CustomRoute({isPrivate, ...rest}){
    // const {authencticated} =useContext(Context);
    const {authencticated, handleLogin, handleLogout}=useContext(Context);
    if(isPrivate && !authencticated){
        return (
            <Redirect to="/" />
        )
    }
    return (
        <Route {...rest} />
    )
}

export default function Routes(){
    return (
    <Switch>
      <CustomRoute exact path="/" component={App} />
      
    </Switch>

    )
}




