import React from 'react';
import {useHistory} from 'react-router-dom';

import * as services from '../Services/data';



const RegisterPage = () => {
  
  const history = useHistory();

  const onSubmit = (e) => {

    e.preventDefault();
  
    let formData = new FormData(e.currentTarget);
    let username = formData.get('userName').trim();
    let password = formData.get('userPassword').trim();
    let roles = formData.get('userRoles').trim();
  
    if (username === "" || password === "" || roles === "") {
      return alert("All fields are required!");
    };
  
    if (username.length < 3) {
      return alert("Username input is invalid!");
    };
  
    try {
    services.register(username, password, roles)
    .then(() => history.push('/login'))
    } catch (error) {
      alert(error.message);
      throw error;
    }
  
  };


  return (
    <div className="containerlogin">
    {/* <div className="brand-logo"></div>
    <div className="brand-title">TWITTER</div> */}
    <div className="inputs">
      <form onSubmit={onSubmit} method='POST'>
      <label>USER NAME</label>
      <input type="text" name='userName' placeholder="User name" />
      <label>PASSWORD</label>
      <input type="password" name='userPassword' placeholder="Min 6 charaters long" />
      <label>ROLE</label>
      <input type="text" name='userRoles' placeholder="Add role" />
      <button className='loginbutton' type="submit">REGISTER</button>
      </form>
    </div>
    {/* <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a> */}
  </div>
  )
}

export default RegisterPage