import React, { Component } from 'react'
import {Link, withRouter} from "react-router-dom";



export class Home extends Component {
    
    getName = () => {
        
        if(this.props.userInfo){
            return this.props.userInfo.name
        }

    }
    getImage = () => {
        if(this.props.userInfo){
            return this.props.userInfo.profile_image_url
        }
    }
    getHandle = () => {
        if(this.props.userInfo){
            return this.props.userInfo.screen_name
        }
    }
    getTweetCount = () => {
        if(this.props.userInfo){
            return this.props.userInfo.statuses_count
        }
    }
    render() {
        return (
            <div>
                <h1>
                    Welcome To TwitterCorrect
                </h1>
                <div> 
                    <img alt="User Profile" className="user-avi" src={this.getImage()}></img>
                </div>
            
                <h2>
                    {this.getName()}
                </h2>
                <h5>
                    {"@" + this.getHandle()}
                </h5>
                <div>
                    {"Tweets: " + this.getTweetCount()}
                </div>
                <div>
                   <button className="search-btn"><Link to={"/tweets"}>Search My Tweets</Link></button> 
                </div>
                
                

            </div>
        )
    }
}

export default withRouter(Home);
