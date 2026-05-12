const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/webhook', (req,res) => {

    const message = 
    req.body.entry?.[0]
    ?.changes?.[0]
    ?.value?.messages?.[0]
    ?.text?.body;

    console.log(message);

    if (message === 'hi') {
        console.log('Reply: hello');
    }

    res.status(200);

})

app.listen(5000, () => {
    console.log('Let it rip...');
})