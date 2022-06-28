const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/productos', require('./router/productoRoutes'));

app.listen(4000, ()=>{
    console.log('servidor corriendo en puerto 4000');
});