import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars, FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyles';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink,
} from './Navbar.elements'
 

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}> 
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/"> 
                            tested<span>web </span>
                        </NavLogo>
                       
                        <MobileIcon onClick={handleClick} >
                            {click ? <FaTimes /> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">
                                    Awards
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services">
                                    Top10
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/prodcuts">
                                   Companies
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/prodcuts">
                                  Opinion
                                </NavLinks>
                            </NavItem>
                             <NavItem>
                                <NavLinks to="/prodcuts">
                                  Shame List
                                </NavLinks>
                            </NavItem>
                               <NavItem >
                                <NavLinks to="/prodcuts">
                                    <span>Login</span>
                                </NavLinks>
                            </NavItem>
  <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary><h6>Start Now <FaArrowRight/> </h6>   </Button>
                                    </NavBtnLink>
                                ) : (
                                          <NavBtnLink to="/sign-up">
                                <Button primary><h6>Start Now <FaArrowRight/> </h6>   </Button>
                                    </NavBtnLink> 
                              )}
                            </NavItemBtn>
                          </NavMenu>
                    </NavbarContainer>
                </Nav>
         </IconContext.Provider>
        </>
    );
};

export default Navbar