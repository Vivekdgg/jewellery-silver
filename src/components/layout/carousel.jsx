import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
const images = [
    {
      src: 'https://jewelry-store-e-commerce.vercel.app/assets/img/slide-img-2.jpg',
      alt: 'Jewelry Item 1',
      title: 'Beautiful Earrings',
      description: 'Beautifully crafted gold Earrings.'
    },
    {
      src: 'https://jewelry-store-e-commerce.vercel.app/assets/img/slide-img-1.jpg',
      alt: 'Jewelry Item 2',
      title: 'Diamond Ring',
      description: 'Exquisite diamond ring for special occasions.'
    },
  ];

const carousel = () => {

  return (
    <CarouselWrapper>
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={false}
      showThumbs={false}
    >
      {images.map((item, index) => (
        <CarouselItem key={index} background={item.src}>
          <h2 data-aos="fade-up" data-aos-duration="2000">{item.title}</h2>
          <p>{item.description}</p>
        </CarouselItem>
      ))}
    </Carousel>
  </CarouselWrapper>
  )
}

const CarouselWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  // padding: 50px;

  @media (max-width: 768px) {
    display:none;
   }
 
   @media (max-width: 600px) {
     display:none;
   }
`;

const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  background: url(${props => props.background}) no-repeat center center/cover;
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 50px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2); /* Adds a dark overlay */
  }

  h2, p {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 1rem;
    font-family: Cinzel Decorative, cursive, sans-serif;
    font-weight: 900;
  }

  p {
    font-size: 2rem;
    color: black;
    font-family: Cinzel Decorative, cursive, sans-serif;
  }
`;

export default carousel