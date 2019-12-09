const hbs = require('hbs');

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