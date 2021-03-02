import React, { Component, useContext } from 'react';
import TwitterLogin from 'react-twitter-auth';
import Home from './home';
import Tweets from './tweets';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/navBar';
import { Container, FlexColumn, Button, SectionHeading, Image } from './components/layout'
import { ManagedUIContext, SessionContext } from './components/context'

class App extends Component {

  constructor(props) {
    super(props);
    this.localStore = JSON.parse(localStorage.getItem('state'))
    this.state = {
      isAuthenticated: this.localStore ? this.localStore.isAuthenticated : false,
      userAuthentication: this.localStore ? this.localStore.userAuthentication : '',
      token: this.localStore ? this.localStore.token : '',
      userInfo: this.localStore ? this.localStore.userInfo : ''
    };
    
  }

  onSuccess = (response) => {
    this.props.history.push("/");
    const token = response.headers.get('x-auth-token');
    response.json().then(body => {
      if (token) {
        this.setState({ isAuthenticated: true, userAuthentication: body, token: token }, () => {
          localStorage.setItem('state', JSON.stringify({ isAuthenticated: true, userAuthentication: body, token: token }))
        });
        this.fetchUserInfo();
      }
    });
    //Call function that makes api fetch for user info after we get credentials

  };

  onFailed = (error) => {
    alert(error);
  };

  logout = () => {
    this.setState({ isAuthenticated: false, token: '', user: null })
  };
  getUserAuthentication = () => {

    let id = !!this.state.isAuthenticated ? (this.state.userAuthentication) : ""
    return id;

  };
  getToken = () => {
    let token = !!this.state.isAuthenticated ? (this.state.token) : ""
    return token;
  }
  getTwitterLogin = (text) => {
    let form = <TwitterLogin className="TwitterLogin" loginUrl="http://localhost:4000/api/v1/auth/twitter"
      onFailure={this.onFailed} onSuccess={this.onSuccess}
      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"> {text}</TwitterLogin>;
    return form;
  }
  fetchUserInfo() {
    fetch("http://localhost:4000/getuser/" + encodeURIComponent(this.state.userAuthentication.user_id) + '/' + encodeURIComponent(this.state.userAuthentication.oauth_token) + '/' + encodeURIComponent(this.state.userAuthentication.oauth_token_secret))
      .then(res => res.json())
      .then(response => this.setState({ userInfo: JSON.parse(response.body) }, () => {
        localStorage.setItem('userInfo', response.body);
        console.log('user data has been fetched')
      }))

  }
  getUserInfo = () => {
    return this.state.userInfo
  }
  userLogout = () => {
    this.setState({ isAuthenticated: false })
    localStorage.clear()
    this.props.history.push('/')
  }

  
  render() {
    return (
      this.state.isAuthenticated ?
        <ManagedUIContext>
          <div className="App">
            <Router>
              <NavBar history={this.props.histroy} logout={this.userLogout} state={this.state.isAuthenticated} />
              <Switch>
                <Route exact path="/">
                  <Home history={this.props.histroy} body={this.getUserAuthentication()} userInfo={this.state.userInfo} />
                </Route>
                <Route exact path="/tweets">
                  <Tweets token={this.getToken()} body={this.getUserAuthentication()} userInfo={this.state.userInfo} />
                </Route>
              </Switch>
            </Router>
          </div>
        </ManagedUIContext>
        :
        <Container height={'100vh'} image={'url(/bg-image.webp)'}>
          <FlexColumn margin={'0 0 0 auto'} width={'10rem'}>
            {this.getTwitterLogin("Sign in")}
          </FlexColumn>
          <FlexColumn margin={'50% auto'} aligned={'center'} jc={'center'}>

            <Image width={'80%'} src="/correctify-logo.png"></Image>
            <SectionHeading>
              Scan, identify, and delete your tweets all in one place.
            </SectionHeading>
            {this.getTwitterLogin("Sign in with Twitter")}
          </FlexColumn>


        </Container>
    )
  }
}

export default App;