import './App.css'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



class Tweets extends Component {

  constructor(props) {
    super(props);
    this.state = {badTweets: null};
  }
  componentDidMount() {
    fetch("http://localhost:4000/gettweets/" + encodeURIComponent(this.props.body.user_id) + '/' + encodeURIComponent(this.props.body.oauth_token) + '/' + encodeURIComponent(this.props.body.oauth_token_secret))
      .then(res => res.json())
      .then(response => this.parseTweets(response.body));
  }
  getTweetCount = () => {
    if(this.props.userInfo){
        return this.props.userInfo.statuses_count
    }
  }
  getBadTweetSize = () => {
    if (this.state.badTweets){
      return this.state.badTweets.size
    }
  }
  getBadTweets = () => {
    var doc;
    if (this.state.badTweets){
      this.state.badTweets.forEach( (tweet) => {
        console.log(tweet)
        doc += (<div> {tweet.text} </div>)

      })
      return doc;
    }

  }
  parseTweets(tweets){
    tweets = JSON.parse(tweets)
    var badTweets = new Map()
    var badWords = ['nigga', 'nigha', 'fuck', 'bitch', 'niga', 'nigger', 'cunt', 'stupid', ' ass ', 'pussy', 'retard', 'fag', 'faggot','fagot', 'beaner', 'wetback', 'negro', ' KKK ', 'GTFO', ]
    for(var tweet = 0; tweet < tweets.length; tweet++){
      for( var word = 0; word < badWords.length; word++){
        if((tweets[tweet].text).includes(badWords[word])){
          badTweets.set(tweets[tweet].id, tweets[tweet])
        }
      } 
    }
    this.setState({badTweets, badTweets})
  }
  
  render() {
    return (

      <div className="Tweets">
        <div>
          <h1> Twitter Correct </h1>
        </div>
        <div>
          <h4>
            Total Tweets:
          </h4>
          <p>{this.getTweetCount()}</p>
        </div>
        <div>
          <p> Want to search for specific words or phrases?</p>
        </div>
        <div>
          <label className="text-bar-label"> Enter words or phrases to be searched for: </label>
        </div>

        <div className="input-form">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input className="text-bar" type="text"></input>
          <div className="add-btn-div">
            <button className="add-btn">ADD</button>
          </div>
          
        </div>
        <div className="tweet-display">
          <div className="tweet-count">
            <h4>
              {"Showing " + this.getBadTweetSize() + " Politicallly Incorrect Tweets"}
            </h4>
          </div>
          <div>
            {this.getBadTweets()}
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(Tweets);