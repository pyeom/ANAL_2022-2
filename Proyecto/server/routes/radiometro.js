const express = require('express');
const axios = require('axios');

const router = express.Router();

async function PostReq() {

    const url_token = 'http://18.214.103.65:8080/api/auth/login';
    const url_sensor = 'http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/efdd9590-4550-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=Fecha,Hora,Albedo&startTs=1265046352083&endTs=1665044947549';
    const config_token = { "username": "alumnos@alumnos.org", "password": "m7a/s99"};
    
    const res_token = await axios.post(url_token, config_token);
    const data_token = res_token.data;
    const token = data_token.token;
    //console.log(token);
    
    const config_radiometro = { 
        method: 'get',
        url: `${url_sensor}`,
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization' : `Bearer ${token}`
        }
    }

    const res_radiometro = await axios.request(config_radiometro)
    
    data_radiometro = res_radiometro.data;
    // console.log(data_radon.Radon);

};
PostReq();

router.get('/', (req, res) => {
    res.send(data_radiometro);
})

module.exports = router;