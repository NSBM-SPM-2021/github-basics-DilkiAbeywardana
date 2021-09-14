import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import db from './firebase';
import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/navigationbar';

import Home from './Pages/Home';
import Books from './Pages/Books';
import Members from './Pages/Members';


function App(){
return(
  <Router>
    <NavBar/>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Books" component={Books}/>
        <Route path="/Members" component={Members}/>
      </Switch>
    </Router>
  );
}

export default App;