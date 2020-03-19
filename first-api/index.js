const express = require("express");

const app = express();

app.get('/test',(req, res)=>{
    res.json({
        data: 'test'
    })
})

app.get('/test2',(req, res)=>{
    res.json({
        data: 'test2'
    })
})

app.listen(8080, () => console.log(`Server started on port ${8080}`));