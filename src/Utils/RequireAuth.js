import React from 'react';
const RequireAuth = (Component) => { 
  return class App extends Component { 
    componentWillMount() { 
      const getToken = localStorage.getItem('login'); 
      if(!getToken) { 
        this.props.history.replace({pathname: '/'}); 
      } 
    } 
    render() { 
      return <Component {...this.props} /> 
    }
  }
} 

export default RequireAuth;