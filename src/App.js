import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SignUp from './Pages/SignUp';
import LogIn from './Pages/LogIn';
import DetailStory from './Pages/DetailStory';
import ListStory from './Pages/ListStory';
import CreateStory from './Pages/CreateStory';
import Main from './Pages/Main';
import { Switch, Route } from 'react-router-dom';
import RequireAuth from './Utils/RequireAuth';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/story/:id" exact component={DetailStory} />
            <Route path="/list" exact component={RequireAuth(ListStory)} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/create/:id?" component={RequireAuth(CreateStory)} />
            {/* <Route path="/create" exact component={RequireAuth(CreateStory)} /> */}
          </div>
        </Route>
      </Switch>
    );
  }
}
export default App;
