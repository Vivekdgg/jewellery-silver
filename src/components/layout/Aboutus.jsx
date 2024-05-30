import React from 'react'
import styled from 'styled-components'
export const Aboutus = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
              <h1 className='abut'>ABOUT US</h1>
            <h1 className="hero-heading">Learn more about us and quality of our products</h1>
          <p className="hero-top-data">
            Our Company is an exclusive supplier of jewelry from the world's
            best brands. We take pride in offering our customers only the
            highest quality products created from precious metals and stones by
            the most experienced master jewelers.
          </p>
          <p className="hero-top-data">
            We are constantly expanding our range to meet the needs of our
            customers and offer them the latest and most fashionable trends in
            jewelry. We are confident that our collection of jewelry will allow
            everyone to express their individual style and create a unique image
          </p>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  padding: 9rem 0;
  background-image: url(/images/testi_bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  // background: linear-gradient(90deg, #141414, #1a1a1a 52%, #1e1e1e 63%, #212121 72%, #1f1f1f 86%);
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .abut
  {
    font-family: Cinzel Decorative, cursive, sans-serif;
    color: #5f3926 !important;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 1.4rem;
    color: #fcbe32;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;



export default Aboutus;