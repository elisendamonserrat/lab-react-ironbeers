import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import BeersPage from './views/BeersPage';

function App() {
  return (
    <div>
    
    < Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/beers" component={BeersPage}/>


    </Switch>


    </div>
  );
}

export default App;
