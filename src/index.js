import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Header from './components/Header';
import SignUp from './Pages/SignUp';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route>
        <div>
          <Header />
          <Route path="/" exact={true} component={App} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
