import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
import fs from 'fs';

const app = express();
const port = process.env.PORT || 5000;
const API_KEY_Weather="2153bc8473580b30da9bb897c79008e4";
// const URL_Weather=
const API_KEY_ExchangeRate="fc5d9d852e01895895b335b2ea12cc6d"
const city="Maputo";

dotenv.config();
app.use(express.json());
app.use(cors());

// `https://api.exchangeratesapi.io/v1/latest? access_key = ${API_KEY_ExchangeRate}&base=MZN&symbols=${CURRENCY}`

//registering routes
// app.get("/", (req, res) => {
//   res.status(200).send("Weather API is running");
// });

//we can use this route if we want to manipulate data in frontend
app.get("/getdata", async (req, res) => {
  try{
  fs.readFile('db_worldcity.json', (err, data) => {
    if (err) throw err;
    let allData = JSON.parse(data);
    console.log(allData)
    res.status(200).json(allData);
});
}
catch(e){
  res.json({teste:"data not found"})
}
});


// we can you use this route to manipulate data from Backend via API
app.get("/city/:id", async (req, res) => {
  try{
     
  
    let city = req.params.id;
    const weather_city = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_Weather}`
    );
    const weath_city = await weather_city.json();
    

    const currency_country=await fetch(
      `https://api.exchangeratesapi.io/v1/latest? access_key=${API_KEY_ExchangeRate}&base=MZN&symbols=${weath_city[0].CURRENCY}`
    );

    curr_country= await  currency_country.json();

    let data=await {...weather_city[0],...curr_country[0]} 
     console.log(data)
    res.status(200).json(data);
  
}
catch(e){
  res.json({teste:"data not found"})
}
});

//creating server
app.listen(port, () => {
  console.log(`server is up on ${port}`);
});