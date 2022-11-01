import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './Common/header/Header';
import Pages from './Pages/Pages';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
           <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
