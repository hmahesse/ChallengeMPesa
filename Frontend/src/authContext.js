import React, {createContext} from 'react';
import authContt from './hooks/useAuth';

const Context= createContext();

 function AuthContext({children}){

    const {authencticated, handleLogin, loading, handleLogout,utilizadorr}= authContt();


    return(
        <Context.Provider value={{authencticated, handleLogin, loading, handleLogout, utilizadorr}}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthContext}