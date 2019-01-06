import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import DetailStory from './Pages/DetailStory';
import ListStory from './Pages/ListStory';
import CreateStory from './Pages/CreateStory';
import { BrowserRouter, Switch, Route,PrivateRoute} from 'react-router-dom';
class App extends Component {

  constructor() {
    super();
  }
  render() {
    const d = true;
    return (
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
              {/* <PrivateRoute authed={d} path='/dashboard' component={CreateStory} /> */}
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
