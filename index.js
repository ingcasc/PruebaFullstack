const express = require ('express');
const mysql = require('mysql2');
const myconn = require('express-myconnection');
const apiRouter = require('./routes/api');

const app =  express(); 

app.set('port',process.env.PORT || 3000 )


const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'apirestbanc'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())



app.get('/', (req,res) =>{ 
    res.send('Programador fullstack V3.0'); 
}); 

app.use('/api', apiRouter);

app.listen(3000, () => { 
    console.log('Arrancando server para prueba programador fullstack V3.0'); 
}); 
