import React from 'react';
import Header from './components/Header';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { HomeScreen } from "./screens"

class App extends React.Component{
  render(){
    return(
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
