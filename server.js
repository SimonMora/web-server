const express = require('express');
const hbs = require('hbs');

let app = express();

app.use(express.static(__dirname+'/public'));

//express handlebars engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//helpers
hbs.registerHelper('getYear', function(){
    return new Date().getFullYear(); 
});

hbs.registerHelper('capitalize', (text)=>{
    
    let palabras = text.split(' ');
    palabras.forEach((element,index) => {
        palabras[index] = element[0].toUpperCase() + element.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});


app.listen(8888,()=>{
    console.log('Servidor de alta en el puerto: '+ 8888);
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