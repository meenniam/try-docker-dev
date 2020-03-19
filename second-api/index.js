const express = require("express");

const app = express();

app.get('/test',(req, res)=>{
    res.json({
        data: 'api2/test'
    })
})

app.get('/test1',(req, res)=>{
    res.json({
        data: 'api2/test1'
    })
})

app.listen(8081, () => console.log(`Server started on port ${8081}`));