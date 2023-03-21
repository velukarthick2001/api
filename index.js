const express =require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

//parse request data connect type application to url-encoded type
app.use(bodyParser.urlencoded({extended: false}));

// parse request data to json type
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('Hello World!!!!');
});
//import doctor routes
const doctorRoutes = require('./src/routes/doctor.route');
//create employee routes
app.use('/api/v1/doctor',doctorRoutes);

app.listen(port,()=>{
    console.log(`Server is Running in the port ${port}`);
});