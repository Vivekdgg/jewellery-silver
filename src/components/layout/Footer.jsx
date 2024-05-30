import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 60px;
    
  }
`;

const FooterSection = styled.div`
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0 20px;
  }
`;

const SectionTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 18px;
  color: #ffd700;
`;

const SectionList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color: #c29958;
  font-size:15px;
`;

const ListLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  margin: 0 10px;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }
`;



  return (
    
    <FooterContainer>
    <FooterSection>
      <SectionTitle>CONTACT INFO</SectionTitle>
      <SectionList>
        <ListItem>
         <span><i className="fas fa-map-marker-alt"></i></span> <ListLink>Place-12,Road-N2.City,State</ListLink>
        </ListItem>
        <ListItem>
        <span><i className="fas fa-phone-alt"></i></span> <ListLink >00965321402</ListLink>
        </ListItem>
        <ListItem>
        <span><i className="fas fa-envelope"></i></span> <ListLink >info@jewelrycollection.com</ListLink>
        </ListItem>
      </SectionList>
    </FooterSection>

    <FooterSection>
      <SectionTitle>INFORMATION</SectionTitle>
      <SectionList>
        <ListItem>
          <ListLink href="">About Us</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="">FAQ</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="">New Products</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="">Best Seles</ListLink>
        </ListItem>
      </SectionList>
    </FooterSection>

    <FooterSection>
      <SectionTitle>MY ACCOUNT</SectionTitle>
      <SectionList>
        <ListItem>
          <ListLink href="">Personal Info</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="">Orders</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="">Our Services</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="">Addresses</ListLink>
        </ListItem>
      </SectionList>
    </FooterSection>

    <FooterSection>
      <SectionTitle>Follow Us</SectionTitle>
      <SocialMedia>
        <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </SocialMedia>
    </FooterSection>
  </FooterContainer>
  )
}

export default Footer