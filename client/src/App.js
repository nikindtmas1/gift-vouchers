import { Route, Switch } from 'react-router-dom';
import {useState ,useEffect} from 'react';

import * as services from './components/Services/data';

import HomePage from './components/HomePage/HomePage';
import CreatePage from "./components/CreatePage/CreatePage";
//import CreateTwo from './components/CreatePage/CreateTwo';
import SearchPage from './components/SearchPage/SearchPage';
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


function App() {
  
  const [vouchers, setVaouchers] = useState([])

  useEffect(() => {

    services.getAll()
    .then((result) => setVaouchers(result))
    .catch(err => alert(err.message))
  },[]);

  console.log(vouchers);
  return (
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
  );
}

export default App;
