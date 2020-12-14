import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import { Header } from './components/heading';
import { Image, FlexColumn, Button } from './components/layout'




export class Home extends Component {
    constructor(props) {
        super(props);
        this.storageUserInfo = JSON.parse(localStorage.getItem('userInfo'))
      }

    getName = () => {
        if (this.props.userInfo) {
            return this.props.userInfo.name
        }
        else if (this.storageUserInfo){
            return this.storageUserInfo.name
            
        }

    }
    getImage = () => {
        if (this.props.userInfo) {
            return this.props.userInfo.profile_image_url
        }
        else if (this.storageUserInfo){
            return this.storageUserInfo.profile_image_url
            
        }
    }
    getHandle = () => {
        if (this.props.userInfo) {
            return this.props.userInfo.screen_name
        }
        else if (this.storageUserInfo){
            return this.storageUserInfo.screen_name
            
        }
    }
    getTweetCount = () => {
        if (this.props.userInfo) {
            return this.props.userInfo.statuses_count
        }
        else if (this.storageUserInfo){
            return this.storageUserInfo.statuses_count
            
        }
    }
    render() {
        return (
            <FlexColumn style={{alignItems: 'center'}}>
                <Header>{'Welcome, ' + this.getName()}</Header>
                <Image alt="User Profile" className="user-avi" src={this.getImage()} />
                <Header size={'12px'} color={'gray'}>{"@" + this.getHandle()}</Header>
                <Header>{"Tweets: " + this.getTweetCount()}</Header>
                <Link to={"/tweets"}><Button>Scan My Tweets</Button></Link>
            </FlexColumn>
        )
    }
}

export default withRouter(Home);
