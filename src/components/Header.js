import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import LogoImg from './logo.svg'
import styled from "styled-components";
import {Button} from "antd";
const Header = styled.header`
background-color: #69c06e;
padding: 10px 100px ;
display: flex;
align-items: center;
color: #FFF;
`;

const Logo = styled.img`
height: 30px;
`;

const StyledLink = styled(NavLink)`
color: white;
margin-left: 30px;
font-size: 16px;
&.active{
  border-bottom: 2px solid white;
}
`;

const Login = styled.div`
margin-left: auto;
`;

const MyButton = styled(Button)`
margin-left: 10px;
a{
  margin-left: 0;
}
`;


function HeaderComponent() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Header>
      <Logo src={LogoImg} alt='Logo'/>
      <nav>
        <StyledLink to='/' exact activeClassName="active">Home</StyledLink>
        <StyledLink to='/history'>History</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
      </nav>
      <Login>
        {isLogin ?
          <>
            admin:lizhe<MyButton type="danger" onClick={()=>setIsLogin(false)}>Logout</MyButton>
          </> :
          <>
            <MyButton type="dashed"  onClick={()=>setIsLogin(true)} ><StyledLink to='/login' activeClassName='on' >Login</StyledLink></MyButton>
            <MyButton type="dashed" ><StyledLink to='/register' activeClassName='on'>Register</StyledLink></MyButton>
          </>
        }

      </Login>
    </Header>
  )

}

export default HeaderComponent;