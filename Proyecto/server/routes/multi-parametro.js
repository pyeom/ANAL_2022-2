const express = require('express');
const axios = require('axios');

const router = express.Router();

async function PostReq() {

    const url_token = 'http://18.214.103.65:8080/api/auth/login';
    const url_sensor = 'http://18.214.103.65:8080/api/plugins/telemetry/DEVICE/101d2fe0-454d-11ed-b4b1-1bcb8f5daa77/values/timeseries?keys=TIMESTAMP,WS,WD,Temp,RH,BP,Depth &startTs=1265046352083&endTs=1665043961492';
    const config_token = { "username": "alumnos@alumnos.org", "password": "m7a/s99"};
    
    const res_token = await axios.post(url_token, config_token);
    const data_token = res_token.data;
    const token = data_token.token;
    //console.log(token);
    
    const config_multipam = { 
        method: 'get',
        url: `${url_sensor}`,
        headers: {
            'Content-Type' : 'application/json',
            'X-Authorization' : `Bearer ${token}`
        }
    }

    const res_multipam = await axios.request(config_multipam)
    
    data_multipam = res_multipam.data;
    // console.log(data_radon.Radon);

};
PostReq();

router.get('/', (req, res) => {
    res.send(data_multipam);
})

module.exports = router;