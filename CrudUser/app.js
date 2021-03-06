const express = require('express');
const mongoose = require('mongoose')
const url = 'mongodb://localhost/UserDB'
const cors = require('cors')


const app = express();

app.use(cors())
mongoose.connect(url);

const con = mongoose.connection;
con.on('open', ()=> {
    console.log('Connection Estabilish')
})

app.use(express.json())

const userRouter = require('./Routes/users')
app.use('/users',userRouter)


app.listen(8080, () =>{
    console.log('Connected!!!')
})
