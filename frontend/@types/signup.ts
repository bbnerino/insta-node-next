import { apiClient } from "../helper/axios"


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
    const response = await apiClient.post<any>(
      `${URL}/user/signup`,{data:this.form}
    )
    return response.data
  }
}