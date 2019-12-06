const express = require('express');

let app = express();

app.listen(8888);
app.get('/',(req, res)=>{
    let data = {
        name: "Dolores White",
        edad: 23,
        url: req.url
    }
    res.send(data);
});
