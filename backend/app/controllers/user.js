exports.postSignUp = (req,res)=>{
  if(!req.body.data){
    res.status(400).send({message: "데이터 형식이 틀렸습니다."});
  }
  console.log(req.body)
  res.status(201).send({message:"가입되었습니다."})
}