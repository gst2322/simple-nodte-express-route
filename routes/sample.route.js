const express = require('express');
const router = express.Router();

router.post('/list',  async (req, res) => {
    console.log('555555555555555');
    res.send('helloooo');
});

router.get('/', function(req, res){
    console.log("Hello Sai");
    res.send('helloooo Saiteja, We got update1');
});

module.exports = router;
