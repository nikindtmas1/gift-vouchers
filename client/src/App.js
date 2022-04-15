import { Route, Switch } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import CreatePage from "./components/CreatePage/CreatePage";
import LoginPage from "./components/LoginPage/LoginPage";
import Search from './components/Serch/Search';
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
          <Navigation />
      </header>
      <div>
        <Switch>
          <Route path='/home' exact component={HomePage} />
          <Route path='/create' component={CreatePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/search' component={Search} />
        </Switch>
          {/* <CreatePage /> */}
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default App;
