const express= require('express') 
const app= express()

app.listen(3000,()=>console.log('Esto fue exsitoso'))


const mainRouter = require('./src/routers/mainRouter')

app.use('/', mainRouter);