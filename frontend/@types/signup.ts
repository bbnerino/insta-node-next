

const URL = "http://localhost:8080"

interface SignupForm{
  name? : string
  id?:string
  password?:string
}

export class SignUp {
  form : SignupForm
  constructor(form:SignupForm){
    this.form = form
  }

  postSignUp = async()=>{
    // console.log('hi')
    const response =  await
    fetch(`${URL}/signup`,{method:"POST",body:JSON.stringify(this.form)})
    .then((res)=>res.json())
    .then((data)=>data)
    .catch((err)=>{return{message:"실패!"}})
    return (response)
  }
}