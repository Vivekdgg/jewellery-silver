import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'
const Header = () => {
  return (
    <MainHeader>
      <Link to="/">
        <img src="/images/jewlery.png" alt="hero image" className="hero-img " />
      </Link>
      <Nav></Nav>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hero-img {
    max-width: 45%;
  }
`;
export default Header