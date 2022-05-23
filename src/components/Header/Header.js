import React from "react";
import LogoImg from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import {
    Header as HeaderWrapper,
    HeaderInner,
    LogoLink,
    HeaderNavLink,
    ButtonLink,
    LogoImg as LogoElement,
    Nav,
} 
from "./HeaderStyle";
import Dropdown from "../Dropdown/Dropdown"



const Header = ({isSecondary}) => {
    
    return(
        <HeaderWrapper isSecondary={isSecondary}>
            <HeaderInner>
                <LogoLink to="/">
                    <LogoElement src={LogoImg} alt="Academy logo" />
                </LogoLink>
                <Dropdown>
                    

                </Dropdown>
                <Nav>
                    <HeaderNavLink to="/allcourses">Courses</HeaderNavLink>
                    <ButtonLink to="/">
                        <Button isNav>
                            Sign in
                        </Button>
                    </ButtonLink>                    
                    <ButtonLink to="/">
                        <Button isNav isSecondary>
                            Register
                        </Button>
                    </ButtonLink>
                </Nav>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;