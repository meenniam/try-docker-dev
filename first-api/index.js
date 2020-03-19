const express = require("express");

const app = express();

app.get('/test',(req, res)=>{
    res.json({
        data: 'api1/test'
    })
})

app.get('/test1',(req, res)=>{
    res.json({
        data: 'api1/test1'
    })
})

app.listen(8080, () => console.log(`Server started on port ${8080}`));