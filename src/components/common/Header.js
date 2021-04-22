import styled from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Toggle from './Toggle';


const Link = ({ isActive, children, ...props }) => {
  return (
    <ReactRouterDomLink {...props}>
      {children}
    </ReactRouterDomLink>
  )
}

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: linear-gradient(to right, ${props => props.theme.primaryColor}, ${props => props.theme.secondaryColor});
  border-bottom: 3px solid ${props => props.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${params => params.open ? 'block' : 'none'};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${props => props.theme.secondaryColor};
  background: #fff;

  @media(min-width: 768px){
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    left: initial;
    top: initial;
    background: none;
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${p => p.isActive ? 'bold' : 'normal'};
  color: black;
`;

const MobileMenu = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;

  >div{
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media(min-width: 768px){
    display: none;
  }
`;

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <MobileMenu onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </MobileMenu>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === '/'}>Home</StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink>
      </Menu>
      <Toggle />
    </HeaderWrapper>
  )
}
export default Header;
