const express= require('express') 
const app= express()
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const publicPath = path.resolve('public');
app.use(express.static(publicPath));
app.use(express.urlencoded( { extended : false}))


app.listen(3000,()=>console.log('Esto fue exsitoso'))


const mainRouter = require('./src/routers/mainRouter')

app.use('/', mainRouter);