import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import HomePage from './components/HomePage';
import CreateAlert from './components/CreateAlert'
import GetProducts from './components/GetProducts'
import UpdateProducts from './components/UpdateProducts'
import DeleteProducts from './components/DeleteProducts';
import GetAlertSettings from './components/GetAlertSettings';
import UpdateAlertSettings from './components/UpdateAlertSettings';
import ApyKey from './components/ApyKey';

function App() {
  return (
    <Router>
    <div className="content">
      <Switch>
          <Route exact path="/create-alert" component={CreateAlert} />
          <Route exact path="/get-products" component={GetProducts} />
          <Route exact path="/update-products" component={UpdateProducts} />
          <Route exact path="/delete-products" component={DeleteProducts} />
          <Route exact path="/get-alert-settings" component={GetAlertSettings} />
          <Route exact path="/update-alert-settings" component={UpdateAlertSettings} />
          <Route exact path={["/", "/home"]} component={ApyKey} />
          <Route exact path={["/menu"]} component={HomePage} />
      </Switch>
    </div>
    </Router>
    
  );


}


export default App;
