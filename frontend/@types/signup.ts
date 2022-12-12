import { apiClient, URL } from "../helper/axios";


interface SignupForm {
  name?: string;
  id?: string;
  password?: string;
}

export class User {
  signupForm?: SignupForm;
  name?: string;
  id?: string;
  password?: string;
  _id?: string;
  imgUrl?: string;

  constructor(form?: SignupForm) {
    this.signupForm = form;
  }

  postSignUp = async () => {
    const response = await apiClient.post<any>(`${URL}/user/signup`, {
      data: this.signupForm,
    });
    return response.data;
  };

  login = async () => {
    const response = await apiClient.post<any>(`${URL}/user/login`, {
      data: this,
    });
    return response.data;
  };
}
