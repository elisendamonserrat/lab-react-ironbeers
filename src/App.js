import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';


function App() {
  return (
    <div>
    
    < Switch>
      <Route exact path="/" component={HomePage}/>


    </Switch>


    </div>
  );
}

export default App;
