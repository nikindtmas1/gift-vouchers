import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import CreatePage from "./components/CreatePage/CreatePage";
//import CreateTwo from './components/CreatePage/CreateTwo';
import LoginPage from "./components/LoginPage/LoginPage";
import Dashboard from './components/Dashboard/Dashboard';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


function App() {
  
  return (
    <div className="">
      <header className="">
          <Navigation />
      </header>
      <div>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/home'  component={HomePage} />
          <Route path='/create' component={CreatePage} />
          <Route path='/login' component={LoginPage} />
      
        </Switch>
          {/* <CreatePage /> */}
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
