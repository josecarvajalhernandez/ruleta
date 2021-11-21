import express from 'express'
import config from './config';


const app = express()

setInterval(function() {
    console.log('esto será la funcion core:'+Date());
}, 180000);

app.set('port', config.PORT);

export default app;