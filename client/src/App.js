import { Route, Switch } from 'react-router-dom';
import {useState ,useEffect} from 'react';

import AuthCtx from './contexts/AuthCtx';

import * as services from './components/Services/data';
import * as userServices from './components/Services/authService';

import HomePage from './components/HomePage/HomePage';
import CreatePage from "./components/CreatePage/CreatePage";
//import CreateTwo from './components/CreatePage/CreateTwo';
import SearchPage from './components/SearchPage/SearchPage';
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


function App() {
  
  const [vouchers, setVaouchers] = useState([]);
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '', userId: '' });

  useEffect(() => {

    services.getAll()
    .then((result) => setVaouchers(result))
    .catch(err => alert(err.message))
  },[]);

  useEffect(() => {
    let userData = userServices.getUser();
    let user = userData.username;
    let id = userData.userId;


    setUserInfo({
      isAuthenticated: Boolean(user),
      user: user,
      userId: id,
    })
  }, []);

  const onLogin = (userData) => {

    let user = userData.username;
    let id = userData._id;
    setUserInfo({
      user: user,
      isAuthenticated: true,
      userId: id,
    })
  };
 
  return (
    <AuthCtx.Provider value={{vouchers, user: userInfo, onLogin}}>
    <div className="">
      <header className="">
          <Navigation />
      </header>
      <div className='mainpage'>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/home'  component={HomePage} />
          <Route path='/create' component={CreatePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/search' component={SearchPage} />
        </Switch>
          {/* <CreatePage /> */}
      
      </div>
      <div><br /></div>
      <Footer />
    </div>
    </AuthCtx.Provider>
  );
}

export default App;
