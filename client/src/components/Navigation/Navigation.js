import * as React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () => {

  return (
    <ul className="navbar">
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
      <div className="navdiv">
        <li className="navli">
          <Link to="/login">Login</Link>
        </li>
      </div>
      <div className="navdiv">
        <li className="navli">
          <Link to="/logout">Logout</Link>
        </li>
      </div>
      <div></div>
    </ul>
  );
}

export default Navigation