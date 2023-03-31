const express = require('express');
const morgan = require('morgan');

const app = express(); 

app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(express.json());

const Radon = require('./routes/radon');
const Multi_parametro = require('./routes/multi-parametro');
const BC_Magee = require('./routes/BC-Magee');
const BC_MAAP = require('./routes/BC-MAAP');
const radiometro = require('./routes/radiometro');
const MP_GRIMM = require('./routes/MP-GRIMM');

app.use('/api/radon', Radon);
app.use('/api/multi-parametro', Multi_parametro);
app.use('/api/bc-magee', BC_Magee);
app.use('/api/bc-maap', BC_MAAP);
app.use('/api/radiometro', radiometro);
app.use('/api/mp-grimm', MP_GRIMM);

app.use('/api', (req, res) => {
    res.send("Hello world");
})

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})



