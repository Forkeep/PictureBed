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

const Login = styled.div`
margin-left: auto;
`;

const Button = styled.button`
margin-left: 4px;
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
      <Login>
        <Button><StyledLink to='/login'  >Login</StyledLink></Button>
        <Button><StyledLink to='/register'  >Register</StyledLink></Button>
      </Login>
    </Header>
  )

}

export default HeaderComponent;