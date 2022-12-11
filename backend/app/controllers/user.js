
const User = require("../models/user")



exports.postSignUp = (req,res)=>{
  if(!req.body.data){
    res.status(400).send({message: "데이터 형식이 틀렸습니다."});
  }
  const {name,id,password} = req.body.data
  
  const newPost =  new User({name:name,userId:id,password:password})
  
  newPost.save()
  .then(()=>{
    res.status(201).send({message:`${id} 님 가입되었습니다`})
  })
  .catch(()=>{
    res.status(400).send({message:`서버에러입니다.`})
  })
}
exports.update = (req,res)=>{
  const {name,id,password} = req.body.data
  User.findOne({userId:req.params.userId},(err,user)=>{
    if(err){()=>{res.status(500).send({message:"정보가 없습니다."})}}
    else{
      user.id = id
      user.name = name
      user.password = password
      user.save((err,data)=>{
        if(err){res.status(500).send({message:"저장 실패"})}
        else{
          res.send(data)
        }
      })
    }
  })
}

exports.findAll = (req,res)=>{
  User.find((err,data)=>{
    if(err){
      res.status(500).send({message:"에러"})
    }
    else{
      res.send(data)
    }
  })
}

exports.findOne = (req,res)=>{
  User.findOne({userId:req.params.userId},(err,data)=>{
    if(err){
      res.status(500).send({message:"에러"})
    }
    else{
      res.send(data)
    }
  })
}

exports.delete = async (req,res)=>{
  User.findOne({_id:req.params.id},(err,user)=>{
    if(err){res.status(500).send({message:"정보가 없습니다."})}
    else{
      User.remove({_id:req.params.id},(err,data)=>{
        if(err){res.status(500).send({message:"에러"})}
        else{
          res.send({message:`${user.name} 회원 정보가 삭제되었습니다.`})
        }})
    }    
  })
}