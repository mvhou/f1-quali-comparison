import fetch from 'node-fetch'
import fs from 'fs'


const getData = (response) => JSON.parse(response).MRData.RaceTable

fetch('http://ergast.com/api/f1/2017/qualifying.json?limit=1', {method:'GET', redirect: 'follow', offset:1})
    .then(response => response.text())
    .then(response => { 
        fs.writeFile('file.json', JSON.stringify(getData(response)), (error) => {
            if (error) throw error;
          });
    })
    .catch(err => console.log(err))


    