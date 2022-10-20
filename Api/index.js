require('./config/conexion');
const express = require('express')
const port = (process.env.port || 3000)
const app = express()

app.use(express.json())


app.set('port',port)

const router = require('./rutas')
app.use('/api',router )


app.listen(app.get('port'),(err)=>{
    if(err)
        console.log("error: " + err);
    else
        console.log('conexion exitosa: ' + port)
})

