const axios = require("axios");
const getInfo= async (req,res) => {
  const cities = req.body.cities;
  console.log(cities);
  const urlstr1 = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  const urlstr2 = '?unitGroup=metric&elements=temp&include=current&key=N3Y493H996ZD8YM6RRBQ4Y395&contentType=json';
  let final = [];
  let finalArray = cities.map(async function(city){
    let response;
    let url = urlstr1 + city + urlstr2;
    //console.log(url);
    try{
      response = await axios.get(url);
      final.push({city : city, temp : response.data.currentConditions.temp});
    }catch(error){
      //console.log(error);
      //res.status(201).send("Not Found");
    }
    
  });
  await Promise.all(finalArray);
  console.log(final);
  res.status(200).send(final);
};


module.exports = {
 getInfo,
};
