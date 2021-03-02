import {
    NavBarContainer,
    NavBarLogo,
    NavBarItems,
    NavBarButton,
    HamburgerIconDiv,
    NavBarItem,
    DropDownItem,
    MobileListContainer,
    SideLinksDiv,
    SideLink,
    CartDiv,
    ItemCount,
    LogoutSection
} from './styled';
import HamburgerIcon from './hamburgerIcon';
import { Button, primary, FlexRow, Image } from '../layout'
import React, { useRef, useEffect, useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faHome, faSearch, faBars, faTimes, faSignOutAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { noAuto } from '@fortawesome/fontawesome-svg-core';


function useOutsideAlerter(ref, setDisplay, display, setHasScrolled) {

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && display) {
                setDisplay(!display)
            }
        }

        function handleScroll() {
            const offset = 0
            const { scrollTop } = document.documentElement
            const scrolled = scrollTop > offset
            setHasScrolled(scrolled)
        }



        // Bind the event listener
        document.addEventListener('scroll', handleScroll)
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener('scroll', handleScroll)
        };
    });
}


export const NavBar = ({ logout, state, history }) => {

    //hook to control opening/closing dropdown menu when user clicks on hamburger icon
    const [display, setDisplay] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false)

    //alternates display property for mobile drop down menu
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setDisplay, display, setHasScrolled);

    return (
        <NavBarContainer scrolled={hasScrolled} bg={'transparent'} ref={wrapperRef}>
            {/* toggles mobile dropdown list when user clicks on hamburger icon */}
            <HamburgerIconDiv onClick={() => (
                setDisplay(!display)
            )}>
                {
                    display ?
                        <FontAwesomeIcon style={{ width: "auto", height: "100%", margin: "0px auto 0px 0px", textAlign: "center" }} color={'white'} icon={faTimes}></FontAwesomeIcon>
                        :
                        <FontAwesomeIcon style={{ width: "auto", height: "100%", margin: "0px auto 0px 0px", textAlign: "center" }} color={primary} icon={faBars}></FontAwesomeIcon>
                }

            </HamburgerIconDiv>
            {/* <NavBarItems >
                {links.map((link) => (
                    <NavBarItem key={link.name}>
                        <NavBarButton title={"Go To " + link.name} key={link.name} href={link.href} color={hasScrolled || display ? 'black' : 'white'} >
                            {link.name}
                        </NavBarButton>
                    </NavBarItem>
                ))}
            </NavBarItems> */}
            <MobileListContainer isdisplay={display} onClick={() => (
                setDisplay(!display)
            )} >
                <DropDownItem title={"Go To Home"} href={'/'}>
                    <FlexRow aligned={'center'}>
                        <div style={{ width: "10%" }}>
                            <FontAwesomeIcon style={{ width: "100%" }} icon={faHome}></FontAwesomeIcon>
                        </div>

                        <h4 style={{ margin: '0px', padding: '0px 10px' }}>Home</h4>
                    </FlexRow>
                </DropDownItem>

                <DropDownItem title={"Search Tweets"} href={'/tweets'}>
                    <FlexRow aligned={'center'}>
                        <div style={{ width: "10%" }}>
                            <FontAwesomeIcon style={{ width: "100%" }} icon={faSearch}></FontAwesomeIcon>
                        </div>
                        <h4 style={{ margin: '0px', padding: '0px 10px' }}>Scan Tweets</h4>
                    </FlexRow>
                </DropDownItem>

                <DropDownItem title={"Account"} href={'/account'}>
                    <FlexRow aligned={'center'}>
                        <div style={{ width: "10%" }}>
                            <FontAwesomeIcon style={{ width: "100%" }} icon={faCog}></FontAwesomeIcon>
                        </div>
                        <h4 style={{ margin: '0px', padding: '0px 10px' }}>Account</h4>
                    </FlexRow>
                </DropDownItem>
                
                <DropDownItem title={"Signout"} onClick={() => logout()}>
                    <FlexRow aligned={'center'}>
                        <div style={{ width: "10%" }}>
                            <FontAwesomeIcon style={{ width: "100%" }} icon={faSignOutAlt}></FontAwesomeIcon>
                        </div>
                        <h4 style={{ margin: '0px', padding: '0px 10px' }}>Sign Out</h4>
                    </FlexRow>
                </DropDownItem>
                <DropDownItem title={"about"} onClick={() => logout()}>
                    <FlexRow aligned={'center'}>
                        <div style={{ width: "10%" }}>
                            <FontAwesomeIcon style={{ width: "100%" }} icon={faQuestionCircle}></FontAwesomeIcon>
                        </div>
                        <h4 style={{ margin: '0px', padding: '0px 10px' }}>About</h4>
                    </FlexRow>
                </DropDownItem>



            </MobileListContainer>
            <NavBarLogo>
                {/* <ETMadeLogo color={hasScrolled || display ? 'black' : 'white'} /> */}
                <Image height={'100%'}src={"/correctify-icon.png"}></Image>
            </NavBarLogo>
            <LogoutSection>
                {/* <FontAwesomeIcon color={primary}style={{ width: "auto", height: "100%", margin: "0px 0px 0px auto", textAlign: "center" }} icon={faSignOutAlt} width={'100%'}onClick={() => {
                    logout()

                }} /> */}
            </LogoutSection>


        </NavBarContainer>
    );
};