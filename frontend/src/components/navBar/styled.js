import styled from 'styled-components';

import { FlexColumn, FlexRow, primary, secondary } from '../layout'

export const NavBarContainer = styled(FlexRow)`
    width: 100%;
    height: 60px;
    padding: 0px 5%;
    align-items: center;
    background-color: ${props => props.bg};
    position: sticky;
    top: 0;
    justify-content: space-between;
    box-shadow: ${props => props.scrolled ? "0px 0px 5px 0px black" : 'none'};

`;
export const NavBarLogo = styled(FlexRow)`
    overflow: hidden;
    width: 30%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
export const NavBarItems = styled(FlexRow)`
    width: 30%;
    justify-content: space-between;
    align-self: center;
    @media (max-width: 1024px) {
        display: none;
    } ;
    
`;
export const NavBarItem = styled(FlexRow)`
    width: 100%;
    flex-direction: column;
`;
export const NavBarButton = styled.a`
    color: ${props => props.color || 'white'};
    font-size: 17px;
    text-decoration: none;
    margin: auto;
    border-bottom: 2px solid transparent;
    ${NavBarItem}:hover & {
        border-bottom: 2px solid white;
        font-size: 22px;
    } ;
`;

export const HamburgerIconDiv = styled(FlexColumn)`
    width: 30%;
    height: 50%;
    @media (min-width: 1025px) {
        display: none;
    } ;
    
`;
export const DropDownItems = styled(FlexColumn)`
    display: none;
    background-color: background;
    position: absolute;
    width: 65%;
    top: 50px;
    left: 150px;
    ${NavBarItem}:hover & {
        display: flex;
    }
`;
export const DropDownItem = styled(NavBarButton)`
    color: ${secondary};
    padding: 15px;
    font-size: 1.2rem;
    width: 100%;
`;
export const MobileListContainer = styled(FlexColumn)`
    background-color: ${primary};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 3%;
    right: 3%;
    width: auto;
    max-width: 500px;
    height: auto;
    min-height: 50%;
    border-radius: 1rem;
    display: ${props => props.isdisplay ? 'flex' : 'none'};
    @media (min-width: 1024px) {
        display: none;
    };
`

export const LogoutSection = styled(FlexColumn)`
    width: 30%;
    height: 50%;
`