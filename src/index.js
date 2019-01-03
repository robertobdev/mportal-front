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
          <Route path="/" exact component={App} />
          <Route path="/story/:id" exact component={DetailStory} />
          <Route path="/list" exact component={ListStory} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={LogIn} />
          <Route path="/create/" exact component={CreateStory} />
          <Route path="/create/:id" exact component={CreateStory} />
        </div>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
