import React, {useEffect} from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Testimonials = () => {

    useEffect(() => {
        AOS.init({
          duration: 400,
          easing: 'ease',
        });
      })
    const TestimonialsSection = styled.section`
    padding: 50px 20px;
    background-color: #f9f9f9;
    text-align: center;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
`;

const Title = styled.h2`
    margin-bottom: 40px;
    font-size: 2em;
    font-family: Cinzel Decorative, cursive, sans-serif;
    color: #5f3926 !important;
    font-weight:bold;
`;

const TestimonialsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`;

const TestimonialItem = styled.div`
background: white;
border-radius: 15px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
margin: 20px;
padding: 30px;
width: 100%;
max-width: 600px;
    flex: 1 1 calc(33% - 40px);
    box-sizing: border-box;
    max-width: calc(33% - 40px);
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      }

    @media (max-width: 900px) {
        flex: 1 1 calc(50% - 40px);
        max-width: calc(50% - 40px);
    }

    @media (max-width: 600px) {
        flex: 1 1 calc(100% - 40px);
        max-width: calc(100% - 40px);
    }
`;

const TestimonialText = styled.p`
    font-style: italic;
    color: #555;
`;

const TestimonialAuthor = styled.h4`
    margin-top: 10px;
    font-size: 2rem;
    color: #01b0f8;
`;

const MemberImage = styled.img`
    position: relative;
    top: -10px;
    height: 120px;
    overflow: hidden;
    border-radius: 100%;
    margin: 20px 0;
    box-shadow: 0px 0px 0px 0px rgba(255, 255, 255, 0.3);
    transition: all 0.6s ease;
    width: 53%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    z-index: 2;
`;


    const testimonials = [
        { id: 1, name: "Nam libero", comment: "Absolutely love the necklace I bought! Great quality and design.",image: '/images/test.jpeg' },
        { id: 2, name: "Hanna Lisem", comment: "The customer service was excellent, and the ring is perfect.", image: '/images/photo1.jpg' },
        { id: 3, name: "Missy Limana", comment: "Beautiful earrings! Will definitely buy again.", image: '/images/photo2.jpg' },
        { id: 4, name: "Ronne Galle", comment: "High-quality bracelets. Highly recommend!", image: '/images/photo3.jpg'},
    ];
  return (
    <TestimonialsSection>
    <Title>Customer Testimonials</Title>
    <TestimonialsList data-aos="zoom-in" data-aos-duration="1000">
        {testimonials.map(testimonial => (
            <TestimonialItem key={testimonial.id} >
                <MemberImage src={testimonial.image} alt={testimonial.name} />
                <TestimonialAuthor data-aos="fade-out" data-aos-duration="2000">{testimonial.name}</TestimonialAuthor>
                <TestimonialText data-aos="fade-out" data-aos-duration="3000">"{testimonial.comment}"</TestimonialText>
            </TestimonialItem>
        ))}
    </TestimonialsList>
</TestimonialsSection>
  )
}

export default Testimonials