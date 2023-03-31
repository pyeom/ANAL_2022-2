const express = require('express');
const axios = require('axios');

const router = express.Router();

async function PostReq() {

    const url_token = 'http://18.214.103.65:8080/api/auth/login';
    const url_sensor = 'http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/6a4dd7a0-4550-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=fecha,hora,BC&startTs=1265046352083&endTs=1665044739122';
    const config_token = { "username": "alumnos@alumnos.org", "password": "m7a/s99"};
    
    const res_token = await axios.post(url_token, config_token);
    const data_token = res_token.data;
    const token = data_token.token;
    //console.log(token);
    
    const config_maap = { 
        method: 'get',
        url: `${url_sensor}`,
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization' : `Bearer ${token}`
        }
    }

    const res_maap = await axios.request(config_maap)
    
    data_maap = res_maap.data;
    // console.log(data_radon.Radon);

};
PostReq();

router.get('/', (req, res) => {
    res.send(data_maap);
})

module.exports = router;