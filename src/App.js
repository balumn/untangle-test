import React from 'react';
import Header from './components/Header';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GenDetailsScreen, BussDetailsScreen } from "./screens"

class App extends React.Component{
  render(){
    return(
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/general" component={GenDetailsScreen} />
            <Route exact path="/business" component={BussDetailsScreen} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
