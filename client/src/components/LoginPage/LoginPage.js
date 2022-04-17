import React from 'react'

const LoginPage = () => {
  return (
    <div className="containerlogin">
  {/* <div className="brand-logo"></div>
  <div className="brand-title">TWITTER</div> */}
  <div className="inputs">
    <label>USER NAME</label>
    <input type="text" placeholder="User name" />
    <label>PASSWORD</label>
    <input type="password" placeholder="Min 6 charaters long" />
    <button className='loginbutton' type="submit">LOGIN</button>
  </div>
  {/* <a href="https://twitter.com/prathkum">MADE BY PRATHAM</a> */}
</div>
  )
}

export default LoginPage