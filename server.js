const express = require('express');
const app = express();
const userRouter = require('./src/routes/usuario.js');
const productsRouter = require('./src/routes/productsRoutes.js')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./src/config/globals')

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}, () => console.log('Connected'))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', userRouter);
app.use('/api/productos', productsRouter)


app.listen(8080, () => {
    console.log('Server on port 8080');
})
