import styled from 'styled-components';
import { Container } from '../globalStyles';

import { Link } from 'react-router-dom';




export const Nav = styled.nav`
background:#fff;
height:55px;
display:flex;
justify-content: center;
align-items: center;
font-size:1.2rem;
position: sticky;
top:0;
z-index:999;
color:white;
border-bottom: 1px solid black;

`;

export const NavbarContainer = styled(Container)`
display:flex;
justify-content:space-between;
height:70px;

${Container}
`;

export const NavLogo = styled(Link)`
color:#142164;
font-family: Epilogue;
font-weight:bold;
justify-content: flex-start;
cursor:pointer;
margin-top:25px;
text-decoration: none;

span{
    color:#EB4362;
}
`;



export const MobileIcon = styled.div`
display: block;

@media screen and (max-width:960px){
    display:block;
    position:absolute;
   color:red;
    margin-bottom:25%;
    background-color: #F3385A;
    right:0;
    transform:translate(-100%, 60%);
    font-size:1.8rem;
    cursor:pointer;
   
}
`;
export const NavMenu = styled.ul`
display:none;
align-items:center;
list-style-type: style none;
text-align:center;
list-style: none;
@media screen and (max-width:960px) {
    display: flex;
    flex-direction:column;
    width:100%;
    height:93vh;
    position:absolute;
    top: 50px;
    left:${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color:#142164;
    
}
`;

export const NavItem = styled.li`
height:50px;
border-bottom: 2px solid transparent;
@media screen and (max-width: 960px){
width:100%;
&:hover{
border:none;
}}
`;

export const NavLinks = styled(Link)`
color:black;
display:flex;
align-items:center;
text-decoration: none;
padding:0.5rem 1rem;
height:100%;
font-size:1rem;
span{
    color:red;
}
@media screen and (max-width: 960px) {
text-align:center;
padding:2rem;
width:100%;
display:table;
color:#fff;
&:hover{
color:#fff;
transition: all 0.3s ease;
}}
`;

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items:center;
    width:100%;
    height:120px;
}
`;


export const NavBtnLink = styled(Link)`
display: flex;
justify-content:center;
align-items:center;
text-decoration: none;
padding:8px 16px;
height: 100%;
width:100%;
border:none;
outline:none;
`;

