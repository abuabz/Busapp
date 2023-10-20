
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRouter = require('./src/routs/user')
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  
app.use('/',userRouter)

app.use('/log',userRouter)

app.use('/update',userRouter)

app.use('/Add_bus',userRouter)



app.listen(3001,()=>{
    console.log("server started at port http://localhost:3001");
})
