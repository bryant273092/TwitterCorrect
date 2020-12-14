import './App.css'
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Tweet from './components/tweet';
import {Header} from './components/heading'
import {Button, FlexColumn} from './components/layout'

const badWords = (require('./data/bad-words.json')).badWords

class Tweets extends Component {
  constructor(props) {
    super(props);
    this.localStorage = new Map(JSON.parse(localStorage.getItem('Tweets')))
    this.state = { badTweets: this.localStorage ? this.localStorage : [], badWords: badWords, word: '', };
  }

  getTweetCount = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      return userInfo.statuses_count
    }
  }

  getBadTweetSize = () => {
    if (this.state.badTweets) {
      return this.state.badTweets.size
    }
  }

  getBadTweets = () => {
    var tweets = [
    ];
    if (this.state.badTweets) {
      this.state.badTweets.forEach((tweet) => {
        tweets.push(
          <Tweet key={tweet.id} tweet={tweet} />
        )
      })
      
      return tweets;
    }
    else{
      console.log('no tweet')
    }
  }
  fetchTweets = () => {
    fetch("http://localhost:4000/gettweets/" + encodeURIComponent(this.props.body.user_id) + '/' + encodeURIComponent(this.props.body.oauth_token) + '/' + encodeURIComponent(this.props.body.oauth_token_secret))
      .then(res => res.json())
      .then(response => this.parseTweets(response.body));
  }
  parseTweets(tweets) {
    tweets = JSON.parse(tweets)
    var badTweets = new Map()
    for (var tweet = 0; tweet < tweets.length; tweet++) {
      for (var word = 0; word < this.state.badWords.length; word++) {
        if ((tweets[tweet].text).includes(this.state.badWords[word])) {
          badTweets.set(tweets[tweet].id, tweets[tweet])
        }
      }
    }
    this.setState({badTweets: badTweets})
    localStorage.setItem('Tweets', JSON.stringify(Array.from(badTweets.entries())))
  }
  addWord = (event) => {
    this.state.badWords.push(this.state.word)


  }
  wordChangeHandler = (event) => {
    this.setState({ word: event.target.value })

  }
  proFetchTweets = () => {
    console.log(this.getTweetCount() / 200)
    return this.getTweetCount
  }
  render() {
    return (

      <FlexColumn>
        {/* <Header size={'15px'}>{"Total Tweets: " + this.getTweetCount() }</Header>
        <Header size={'20px'}>Want to search for specific words or phrases?</Header>
        <Header size={'20px'}>Enter words or phrases to be searched for:</Header> */}
        {/* <div className="input-form">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input className="text-bar" type="text" onChange={this.wordChangeHandler} />
          <div className="add-btn-div">
            <button className="add-btn btn" onClick={this.addWord}>ADD</button>
          </div> */}
        <FlexColumn>
          <Button onClick={this.fetchTweets} >Scan my Tweets</Button>
        </FlexColumn>
        <FlexColumn>
          {this.getBadTweetSize()? <Header size={'15px'}>{"Showing " + this.getBadTweetSize() + " Red Flag Tweets"}</Header> : <Header>You have no bad tweets</Header>}
          
        </FlexColumn>
        <FlexColumn>
          {this.getBadTweets()}
        </FlexColumn>
      </FlexColumn>

    );
  }
}

export default withRouter(Tweets);