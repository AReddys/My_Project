import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './containers/HomePage/index';
import DetailsPage from './containers/DetailsPage/index';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/entities/:company_name/:id" component={DetailsPage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


