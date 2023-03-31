const express = require('express');
const axios = require('axios');

const router = express.Router();

async function GetRadon() {

    const url_token = 'http://18.214.103.65:8080/api/auth/login';
    const url_radon = 'http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/723d0580-452d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Radon&startTs=1265046352083&endTs=1665029708303';
    const config_token = { "username": "alumnos@alumnos.org", "password": "m7a/s99"};
    
    const res_token = await axios.post(url_token, config_token);
    const data_token = res_token.data;
    const token = data_token.token;
    //console.log(token);
    
    const config_radon = { 
        method: 'get',
        url: `${url_radon}`,
        headers: {
            'Content-Type' : 'application/josn',
            'X-Authorization' : `Bearer ${token}`
        }
    }

    const res_radon = await axios.request(config_radon)
    
    data_radon = res_radon.data;
    // console.log(data_radon.Radon);

};
GetRadon();

router.get('/', (req, res) => {
    res.send(data_radon);
})

module.exports = router;