const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');



console.log('hiiiiiiii')

app.use(cors());

const hotel = require('./routes/sample.route');
app.use(`/`, hotel);



app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})