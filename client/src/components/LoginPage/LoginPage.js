import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';

import * as services from '../Services/data';
import AuthCtx from '../../contexts/AuthCtx';

const LoginPage = () => {

  const {onLogin} = useContext(AuthCtx);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let username = formData.get('userName').trim();
    let password = formData.get('userPassword').trim();

    if (username === "" || password === "") {
      return alert("All fields are required!");
    }

    if (username.length < 3) {
      return alert("Username input is invalid!");
    }

    services.login(username, password)
        .then(logData => {
          onLogin(logData);
        })
        .catch(error => console.log(error))
        history.push('/home');

  }

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
    <button className='loginbutton' type="submit">LOGIN</button>
    </form>
  </div>
  {/* <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a> */}
</div>
  )
}

export default LoginPage