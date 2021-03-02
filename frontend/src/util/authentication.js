import TwitterLogin from 'react-twitter-auth';

onSuccess = (response) => {
    this.props.history.push("/");
    const token = response.headers.get('x-auth-token');
    response.json().then(body => {
        if (token) {
            this.setState({ isAuthenticated: true, userAuthentication: body, token: token }, () => {
                
            });
            this.fetchUserInfo();
        }
    });
    //Call function that makes api fetch for user info after we get credentials

};

onFailed = (error) => {
    alert(error);
};
export const getTwitterLogin = (text) => {
    return (
        <TwitterLogin
            className="TwitterLogin"
            loginUrl="http://localhost:4000/api/v1/auth/twitter"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse">
            {text}
        </TwitterLogin>
    );
}