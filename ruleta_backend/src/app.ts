import express from 'express'
import config from './config';


setInterval(function() {
    console.log('esto será la funcion core');
}, 180000);

const app = express()
app.set('port', config.PORT);

export default app;