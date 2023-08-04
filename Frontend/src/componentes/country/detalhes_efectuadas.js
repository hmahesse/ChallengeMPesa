import React, {useState, useEffect} from 'react';
import "./estilo.css";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import api from "../../api";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
// import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FeatherIcon from "feather-icons-react";
import {useParams} from 'react-router-dom';


const Cotacao_detalhes=()=>{
    

    const [items, setItems]=useState([]);
    const [temporario, setTemporario]=useState({
        city:''
    });



    const [tabela, setTabela]=useState([]);
    const [pacote, setPacote]=useState([])
    const elementos=[]
    const config={
        header: {
            "Content-Type": "application/json"
        }
    }

    const encon_itens=async (consg)=>{
       const {data} = await api.get("/getdata");
       console.log(data);
       return data;
    }

    useEffect(()=>{
        (async()=>{
            encon_itens(config).then(async(data)=>{
                // console.log(data)
                return await setItems([...items, ...data])
                
            }
            )
        })()
    }, [])

    const handlechange=name=>e=>{
       
        setTemporario({...temporario, [name]:e.target.value})
       
      }

    const onsubmit=async (e)=>{
  
        e.preventDefault();
     
       //  console.log(values);
       const config = {
         header: {
           "Content-Type": "application/json",
         },
       };
     
       try{
         
       
          const userrr=await {
           pacote:pacote
     
     
     
          }
      
             
     
       }
       catch(err){
         console.log("ocorreu um erro ao tenatr aceder")
       }
      
    
      }
      
      const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
      }
      

    const adionar=async()=>{

        var city=await temporario.city;
        var quant= await temporario.quant;
        if(city.trim()!=''){
            var valores =await {};
       valores["city"] =await city;
       
      
       var indice=await items.findIndex(x=>x.city==city);
       var preccc=await parseFloat(items[indice].preco_venda);
        var quantt=await parseFloat(quant);
       valores["Precoo"]=await quantt*preccc;
       valores["prunit"]=await preccc;
       console.log(indice);
         await setPacote([...pacote,valores]);
         var teste=await pacote;
         await teste.push(valores);
         await  teste.map(async(itemm, i)=>{
             elementos.push(<tr><td>{itemm.city}</td></tr>)
         })
         
      
        
       
        setTabela([...elementos]);


        setTemporario({...temporario, city:''})

        // console.log(tabela)
        console.log(pacote)
        

        }
       
        

    }

    const eliminar=async (e)=>{
        const elementos=await []
        
        // console.log(e); 

        var teste=await pacote;
        await teste.splice(e, 1);
        // console.log(teste);
        setPacote([...teste]);
         
        
        setTabela([...elementos]);
        


        



    }

    const formulario=()=>{
        return (
            <React.Fragment>
                
            <Grid item xs={10} >
            <Autocomplete
                    disablePortal
                    id="city"
                    name="city"
                    
                    options={items.map((option) => option.city)}
                    sx={{  fontFamily: "Quicksand"}}
                    renderInput={(params) => <TextField {...params} label="Cidade" name="city"  id="city" value={temporario.city} onBlur={handlechange('city')} />}
                    style={{fontFamily: "Quicksand"}}
                    fullWidth
                    />
            </Grid>
           

         <Grid item xs={4} md={2}>
        <Button  className="botao_adicionado" id="botao_adicionado"  onClick={() => { adionar() }}  sx={{backgroundColor:"red", color:"#fff", height:"100%",width:"25%", borderRadius:"23234px", float: "center"}} > +</Button>
        </Grid>

            </React.Fragment>
            
        )
    }





    return (
        <React.Fragment>
        <div className="secao_forms">
            <h3 style={{textAlign: 'center', color:"#217346"}}> Processo de pesquisa </h3>
            <div className="quadro_form">
            <form>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 2 }} >

            {formulario()}


        <Grid item xs={12} md={12}>     
         
                <section>
      
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>City</th>
                <th>Country</th>
                <th>Weather</th>
                <th>Exchange Rate</th>
                <th>Population</th>
                
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content1">
          <table cellpadding="0" cellspacing="0" border="0" id="enpacotamento">
            {tabela}
          </table>
    
          
        </div>

      </section>
      </Grid>

    
                <Grid item xs={12} justify="center" sx={{ display: "flex",
                   
                    justifyContent:"center"}} >
              <Button color="primary" variant="contained" className="center" onClick={()=>{}} sx={{float:"center", backgroundColor:"red"}}>voltar</Button>

        </Grid>
                
            </Grid>


                        </form>
                    </div>
                        
                    </div>
                </React.Fragment>
    )


}

export default Cotacao_detalhes;