const express = require("express");

const app = express();

app.get('/test',(req, res)=>{
    res.json({
        data: 'test'
    })
})

app.listen(8080, () => console.log(`Server started on port ${8080}`));