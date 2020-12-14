import styled from 'styled-components';
import {FlexRow} from '../layout'

export const TweetDiv = styled(FlexRow)`
    width: 100%;
    border-top: 2px solid gray;
    margin: 0px auto;
`
export const TweetText = styled.p`
    color: white;
    font-size: 16px;
    padding: 0px 0px;
    margin: 0px;
    text-align: left;
    
` 
export const TweetDate = styled.p`
    color: gray;
    font-size: 12px;
    padding: 0px 5px;
    margin: 0px;
    
`
export const UserPhoto = styled.img`
    border-radius: 50%;
    width: 80%;
    margin: 0px auto;
`
export const Name = styled(TweetDate)`
    font-size: 15px;
    color: white;
    width: auto;
    align: left;
    padding-left: 0px;
    
`

export const CheckBox = styled.input`
    padding: 0;
    margin: 0;
    background-color: red;
`