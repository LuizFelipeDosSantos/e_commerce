const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', proxy('http://localhost:5006'));
app.use('/product', proxy('http://localhost:5007'));
app.use('/shopping', proxy('http://localhost:5008'));

app.listen(5005, () => {
    console.log('Gateway is Listening to Port 5005')
})