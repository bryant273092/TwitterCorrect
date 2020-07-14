import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import Home from './home';
import Tweets from './tweets';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false, userAuthentication: null, token: '', userInfo: null};
  }
  
  onSuccess = (response) => {
    this.props.history.push("/home");
    const token = response.headers.get('x-auth-token');
    response.json().then(body => {
      if (token) {
        this.setState({isAuthenticated: true, userAuthentication: body, token: token});
        this.fetchUserInfo();
      }
    });
    //Call function that makes api fetch for user info after we get credentials
    
  };

  onFailed = (error) => {
    alert(error);
  };

  logout = () => {
    this.setState({isAuthenticated: false, token: '', user: null})
  };
  getUserAuthentication = () => {
    
    let id = !!this.state.isAuthenticated ? (this.state.userAuthentication): ""
    return id;

  };
  getToken = () => {
    let token = !!this.state.isAuthenticated ? (this.state.token): ""
    return token;
  }
  getTwitterLogin = () => {
    let form = <TwitterLogin className="TwitterLogin" loginUrl="http://localhost:4000/api/v1/auth/twitter"
      onFailure={this.onFailed} onSuccess={this.onSuccess}
      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"> Sign in with Twitter</TwitterLogin>;
    return form;
  }
  fetchUserInfo() {
    fetch("http://localhost:4000/getuser/" + encodeURIComponent(this.state.userAuthentication.user_id) + '/' + encodeURIComponent(this.state.userAuthentication.oauth_token) + '/' + encodeURIComponent(this.state.userAuthentication.oauth_token_secret))
      .then(res => res.json())
      .then(response => this.setState({ userInfo: JSON.parse(response.body) }))

  }
  getUserInfo = () => {
    return this.state.userInfo
  }


  render() {
    if(!this.state.isAuthenticated)
    {
      return (
        <div className="app">
          <div className="titleHeader">
            <h1>
              Twitter Correct
            </h1>
          </div>
          <div className="AppSummary">
            <p>
              Worried about potential employers or cancel culture finding your old tweets? Correct your
              Twitter Account with TwitterCorrect by allowing it to search all your old tweets
              against a blacklist of damaging words.
            </p>
          </div>
          <div className="twitterLogin">
            {this.getTwitterLogin()}
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          
          <Router>
            <Switch>
              <Route exact path="/home">
                <Home history={this.props.histroy} body={this.getUserAuthentication()} userInfo={this.state.userInfo}/>
              </Route>
              <Route exact path="/tweets">
                <Tweets token={this.getToken()}body={this.getUserAuthentication()} userInfo={this.state.userInfo} />
              </Route>
            </Switch>
          </Router>
          

        </div>

      );
    }
    
  }
}

export default App;