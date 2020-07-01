import React from "react";
import {NavLink} from "react-router-dom";
import LogoImg from './logo.svg'
import styled from "styled-components";

const Header = styled.header`
background-color: green;
padding: 10px 100px ;
display: flex;
align-items: center;
color: #FFF;
`;

const Logo = styled.img`
height: 30px;
`;

const StyledLink = styled(NavLink)`
color: red;
margin-left: 30px;
&.active{
  border-bottom: 1px solid red;
}
`;

function HeaderComponent() {
  return (
    <Header>
      <Logo src={LogoImg} alt='Logo'/>
      <nav>
        <StyledLink to='/' exact activeClassName="active">Home</StyledLink>
        <StyledLink to='/history'>History</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
      </nav>
    </Header>
  )

}

export default HeaderComponent;