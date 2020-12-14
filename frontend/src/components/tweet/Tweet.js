import { TweetDiv, TweetText, TweetDate, UserPhoto, Name, CheckBox} from './styled';
import React from 'react';
import { FlexColumn, FlexRow} from '../layout';

export const Tweet = ({ tweet }) => {
    const userImage = (JSON.parse(localStorage.userInfo)).profile_image_url
    const userName = (JSON.parse(localStorage.userInfo)).name
    const atName = (JSON.parse(localStorage.userInfo)).screen_name
    
    const date = ((tweet.created_at).split(' ')).slice(0,3).join(' ')
    return (
        <TweetDiv id={tweet.id}>
            <FlexColumn style={{width: "15%"}}>
                <UserPhoto src={userImage} />
            </FlexColumn>
            <FlexColumn style={{width: "75%"}}>
                <FlexRow style={{alignItems: 'center'}}>
                    <Name>{userName}</Name>
                    <TweetDate>{"@" + atName + " • " + date}</TweetDate>
                </FlexRow>
                <TweetText >{tweet.text}</TweetText>
            </FlexColumn>
            <FlexColumn style={{width: "10%", alignItems: 'center', justifyContent: 'space-around'}}>
                <CheckBox type="checkbox" />
            </FlexColumn>



        </TweetDiv>
    )
}