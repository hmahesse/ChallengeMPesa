import React, {useState, useEffect} from 'react';
import axios from 'axios';
import history from '../history';
import api from '../api';

export default function AuthContt(){
    const [authencticated, setAuthenticated]=useState(false);
    const [utilizadorr, setUtilizador]=useState('');
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        setAuthenticated(true);
      }
  
      
    }, []);


async function  handleLogin(userrr){
    const config = {
        header: {
          "Content-Type": "application/json",
        },
      };

      
    
      try{
          console.log(userrr);

        const { data } = await api.post(
            "/login",
            userrr,
            config
          );
         const {token, user}= await data;
         console.log(user)
         if(token){
             console.log("utilizador ja fez o login")
            // setAuthenticated(true);
            console.log(token);
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('yugbh',JSON.stringify(user.nivel_acesso));
            var ttt=user.nome.lastIndexOf(" ");
            if(ttt==-1){
              setUtilizador(user.nome)
            }
            else{
              var ui=user.nome.charAt(0)+user.nome.substr(ttt+1)
              var tts=ui.replace(' ', '');
              setUtilizador(tts)
            }
            
            api.defaults.headers.Authorization = `Bearer ${token}`;
        
            setAuthenticated(true);
            console.log(utilizadorr);
            
           
            history.push("/request");
         }
         else{

           window.location.href = "/login"

            

         }

    }

      
      catch(err){
     
        return {error:"nao foi encontrado"}
          
        //   history.push("/login");
      }
    }

    function handleLogout() {
      setAuthenticated(false);
  
      localStorage.removeItem('token');
      localStorage.removeItem('yugbh');
      setUtilizador('');
      api.defaults.headers.Authorization = undefined;
    
      history.push('/login');
    }

    return {authencticated, handleLogin, handleLogout, utilizadorr}

}

