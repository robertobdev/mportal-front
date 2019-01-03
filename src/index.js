import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Header from './components/Header';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import DetailStory from './Pages/DetailStory';
import ListStory from './Pages/ListStory';
import CreateStory from './Pages/CreateStory';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route>
        <div>
          <Header />
          <Route path="/" exact={true} component={App} />
          <Route path="/story/:id" component={DetailStory} />
          <Route path="/list" component={ListStory} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/create" component={CreateStory} />
          <Route path="/create/:id" component={CreateStory} />
        </div>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
