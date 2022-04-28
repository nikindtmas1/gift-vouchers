import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import AuthCtx from '../../contexts/AuthCtx';

const Navigation = () => {

  let value = useContext(AuthCtx);
  //let user = value.user.user;
  let isAuth = value.user.isAuthenticated;

  let guest = (

    <>
      <div></div>
      <div></div>
      <div></div>
      {/* <div className="navdiv">
        <li className="navli">
          <Link to="/home">Home Page</Link>
        </li>
      </div>
      <div className="navdiv">
        <li className="navli">
          <Link to="/create">Create Page</Link>
        </li>
      </div> */}
      <div className="navdiv">
        <li className="navli">
          <Link to="/login">Login</Link>
        </li>
      </div>
      {/* <div className="navdiv">
        <li className="navli">
          <Link to="/logout">Logout</Link>
        </li>
      </div> */}
      <div></div>
      <div></div>
      <div></div>
    
    </>
  );

  let userNav = (
    <>
      <div></div>
      <div></div>
      <div></div>
      <div className="navdiv">
        <li className="navli">
          <Link to="/home">Home Page</Link>
        </li>
      </div>
      <div className="navdiv">
        <li className="navli">
          <Link to="/create">Create Page</Link>
        </li>
      </div>
      {/* <div className="navdiv">
        <li className="navli">
          <Link to="/login">Login</Link>
        </li>
      </div> */}
      <div className="navdiv">
        <li className="navli">
          <Link to="/logout">Logout</Link>
        </li>
      </div>
      <div></div>
      <div></div>
      <div></div>
      </>
  );

  return (
    <ul className="navbar">
       {isAuth
      ? userNav
      : guest
      }
    </ul>
  );
}

export default Navigation