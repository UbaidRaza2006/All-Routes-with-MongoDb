const express = require('express');
const app = express();
const mongoose =require('mongoose')
const userRoute = require('./Routes/User')
const morgan = require('morgan')


mongoose.connect('mongodb+srv://ubaidrazabawany13:oDhZcUUCK1BWGd9p@cluster0.dr9sk08.mongodb.net/').then(console.log('MongoDB Connected')).catch((err) => console.log('There is an error in connecting MongoDB ',err))


app.use(express.json());
app.use(morgan('/tiny'))

app.get('/',(req,res)=>{
    res.send(new Date())
})

app.use('/user',userRoute)


const port = 3000;
app.listen(port,()=>{
    console.log("App is running on port ", port);
})


