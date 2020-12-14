import styled from 'styled-components';

import { FlexColumn, FlexRow } from '../../components/layout'

export const NavBarContainer = styled(FlexRow)`
    width: 100%;
    height: 50px;
    padding: 25px 25px;
    align-items: center;
    background-color: #15202B;
    position: sticky;
    top: 0;
    justify-content: space-between;
    border-bottom: 1px solid gray;
`;
export const NavBarLogo = styled(FlexRow)`
    overflow: hidden;
    margin-left: 20px;
`;
export const NavBarItems = styled(FlexRow)`
    width: 65%;
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
    color: white;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    margin: auto;
    border-bottom: 2px solid transparent;
    ${NavBarItem}:hover & {
        border-bottom: 2px solid gray;
    } ;
`;

export const HamburgerIconDiv = styled(NavBarButton)`
    margin: 0px;
    align-self: center;
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
    color: white;
    padding: 10px;
    border-bottom: 1px solid gray !important;
    margin: auto 0px;
`;
export const MobileListContainer = styled(FlexColumn)`
    background-color: #15202B;
    flex-direction: column;
    position: absolute;
    border-top: 1px solid gray;
    top: 50px;
    left: 0px;
    right: 0px;
    width: 100%;
    display: ${(props) => props.display || 'none'};
    @media (min-width: 1025px) {
        display: none;
    } ;
`;