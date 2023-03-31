const express = require('express');
const axios = require('axios');

const router = express.Router();

async function GetGrimm() {

    const url_token = 'http://18.214.103.65:8080/api/auth/login';
    const url_sensor = 'http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/99ce9f80-4557-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,TSP,PM10,PM4,PM2.5,PM1&startTs=1265046352083&endTs=1665048457821';
    const config_token = { "username": "alumnos@alumnos.org", "password": "m7a/s99"};
    
    let res_token = await axios.post(url_token, config_token);
    let data_token = res_token.data;
    let token = data_token.token;
    //console.log(token);
    
    const config_grimm = { 
        method: 'get',
        url: `${url_sensor}`,
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization' : `Bearer ${token}`
        }
    }

    let res_grimm = await axios.request(config_grimm)
    
    data_grimm = res_grimm.data;
    // console.log(data_radon.Radon);

};

GetGrimm();
router.get('/', (req, res) => {
    res.send(data_grimm);
})

module.exports = router;