import {
    NavBarContainer,
    NavBarLogo,
    NavBarItems,
    // NavBarButton,
    HamburgerIconDiv,
    NavBarItem,
    // DropDownItem,
    MobileListContainer,
} from './styled';
import {Button} from '../layout'
import links from '../../data/nav_links.json'
import  React, {useState}  from 'react';
import HamburgerIcon from './hamburgerIcon';
// import { Image } from '../layout';
import { Link } from "react-router-dom";
export const NavBar = ({logout, state, history}) => {
    //hook to control opening/closing dropdown menu when user clicks on hamburger icon
    const [display, setDisplay] = useState('none');
    // const teamLogo = "";
    //alternates display property for mobile drop down menu
    const changeDisplay = () => {
        if (display === 'none') {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    };
    return (
        <NavBarContainer>
            {/* toggles mobile dropdown list when user clicks on hamburger icon */}
            <HamburgerIconDiv onClick={changeDisplay}>
                <HamburgerIcon />
            </HamburgerIconDiv>
            <MobileListContainer display={display}>
                {links.map((link) => (
                    <Link key={link.name} style={{textDecoration:"none"}}onClick={() => {
                        setDisplay('none')
                    }} to={link.href}>{link.name}</Link>
                ))}
            </MobileListContainer>
            <NavBarLogo>
                {/* <Image width='50px' height='48px' alt="An image of the Taco Nacion Logo" src={"/taco_nacion_logo.webp"} /> */}
            </NavBarLogo>
            <NavBarItems>
                {links.map((link) => (
                    <NavBarItem key={link.name}>
                        
                        <Link onClick={() => {
                            setDisplay('none')
                        }}to={link.href}>{link.name}</Link> 
                        
                    </NavBarItem>
                ))}
            </NavBarItems>
            <Button back={'red'}width={'35%'}onClick={ () =>{
                logout()
                
            }}>{state? 'Log Out' : 'Sign In'}</Button>
            
        </NavBarContainer>
    );
};
