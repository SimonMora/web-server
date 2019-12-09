const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

let app = express();
const port = process.env.PORT || 8888;

// =======================================

//static shit
app.use(express.static(__dirname+'/public'));

//express handlebars engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.listen(port,()=>{
    console.log('Servidor de alta en el puerto: '+ port);
});

app.get('/',(req, res)=>{
    
    res.render('home', {
        name : 'saimON tHE Best',
    });
    
});
app.get('/about',(req, res)=>{

    res.render('about',{
        name : 'saimON tHE Best',
    });
    
});