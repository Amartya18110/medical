import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DataEntry from './admin/data_entry/dataEntry';
import Login from './admin/login';
import Signup from './admin/signup';
import Aboutus from './components/About/aboutus';
import Footer from './components/Footer2/Footer';
import HomePage from './components/layout/homePage';
import Home from './components/Home/Home'
import Navbar from './components/nav/navbar';


const App=()=> {
  return (
    <>
    
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/admin/login">
          <Login />
        </Route>
        <Route exact path="/admin/signup">
          <Signup />
        </Route>
        <Route exact path="/admin/data_entry">
          <DataEntry />
        </Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/homePage" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
