var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const userRoutes = require('./app/routes/user');
const mongoose = require("mongoose")
require("dotenv").config({path:"variable.env"})
// express app 생성
const app = express()

// bodyParser 사용
app.use(bodyParser.json()); // application/json

// database with mongodb 

 

// ######################################
app.use(cors());

const options = {
  origin: "*", // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};
app.use(cors(options));



app.get('/',(req,res)=>{
  res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
})

app.use('/user',userRoutes) 



mongoose.set("strictQuery",false)

mongoose
  .connect(
    process.env.MONGODB_URL,
    {useNewUrlParser:true}
  )
  .then(result => {
    app.listen(8080);
  })
  .catch(err => console.log(err));
