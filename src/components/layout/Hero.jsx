import React, {useEffect} from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  })
  return (
    <Wrapper data-aos="fade-in">
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data" data-aos="zoom-in" data-aos-duration="1000">WOMEN'S JEWELLERY</p>

          <h1 className="hero-heading" data-aos="fade-right" data-aos-duration="1000">FAMILY JEWELLERY COLLECTION</h1>
          <p className="hero-para">Follow your true passion, let your jewelry guide you.</p>
        </div>

        <div className="section-hero-image">
          <picture>
            {/* <img src="./banner.e0f6650f.jpg" alt="hero image" className="hero-img " /> */}
          </picture>
        </div>
      </div>
    </Wrapper>

    
  )
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-image : url("/images/banner.e0f6650f.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;


  @media (max-width: 900px) {
    display:flex;
    flex-direction: row-reverse; 
    text-align: center;
    align-items: center;
    animation: fadeIn 1s ease-in-out;
}

@media (max-width: 600px) {
  display:flex;
  flex-direction: row-reverse; 
  text-align: center;
  align-items: center;
  animation: fadeIn 1s ease-in-out;
}

  // background: linear-gradient(90deg, #141414, #1a1a1a 52%, #1e1e1e 63%, #212121 72%, #1f1f1f 86%);
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 25px 25px;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: black;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 3rem;
    color: black;
  }

  .hero-para {
    margin-top: 1.2rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    color: black;
    font-family: serif;
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
export default Hero