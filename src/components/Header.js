import React from "react";
import {NavLink,useHistory} from "react-router-dom";
import LogoImg from './logo.svg'
import styled from "styled-components";
import {Button} from "antd";
import {useStores} from "../stores/index.js"
import {observer} from "mobx-react";

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


const HeaderComponent = observer(() => {
  const history = useHistory();
  const {UserStore, AuthStore} = useStores();
  const handleLogin = () => {
    history.push('/login')
  };
  const handleRegister = () => {
    history.push('/register')
  };
  const handleLogout = () => {
    AuthStore.logout();
    history.push('/login')
  };

  return (
    <Header>
      <Logo src={LogoImg} alt='Logo'/>
      <nav>
        <StyledLink to='/' exact activeClassName="active">Home</StyledLink>
        <StyledLink to='/history'>History</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
      </nav>
      <Login>
        {UserStore.currentUser ?
          <>
            {UserStore.currentUser.attributes.username} <MyButton type="danger" onClick={handleLogout}>Logout</MyButton>
          </> :
          <>
            <MyButton type="primary" onClick={handleLogin}>Login</MyButton>
            <MyButton type="dashed" onClick={handleRegister}>Register</MyButton>
          </>
        }
      </Login>

    </Header>
  )

})

export default HeaderComponent;