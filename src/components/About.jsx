import React, { useEffect } from 'react'
import './Aboutus.css'
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AboutUsContainer = styled.div`
padding: 20px;
max-width: 1500px;
margin: auto;
background: ghostwhite;
`;

const Title = styled.h1`
text-align: center;
margin-bottom: 40px;
color: black;
`;

const TeamContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

const TeamMember = styled.div`
flex: 1 1 300px;
height: 440px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 20px 30px -10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    min-width: 260px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    position: relative;
    transition: all 0.4s ease;
    margin: 20px;
padding: 20px;
border: 1px solid #ddd;
border-radius: 8px;
text-align: center;
animation: ${fadeIn} 1s ease-in-out;
    &:before {
      height: 190px;
      width: calc(100% + 100px);
      content: "";
      position: absolute;
      background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
      border-radius: 4px 4px 100% 100%;
      transition: all 0.4s ease-out;
      top: 0;
    }
    &:hover {
      background-size: 100% 100%;
      opacity: 0.8;
    }

@media (max-width: 768px) {
  flex: 1 1 100%;
}
`;

const MemberImage = styled.img`
    position: relative;
    top: 75px;
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

const MemberName = styled.h2`
margin: 45px 0 0px;
`;

const MemberRole = styled.p`
color: #555;
`;


const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Title1 = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
  color:black;
`;

const Subtitle = styled.p`
font-size: 1.4rem;
color: #666;
font-family: cursive;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Technique = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 0 1 48%;
`;

const TechniqueImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const TechniqueTitle = styled.h3`
  font-size: 1.5em;
  margin-top: 10px;
  font-family: fantasy;
`;

const TechniqueDescription = styled.p`
  font-size: 1em;
  color: #666;
`;

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO',
      image: '/images/bios2.svg'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: '/images/test.jpeg'
    },
    {
      name: 'Mike Johnson',
      role: 'Marketing Head',
      image: '/images/bios2.svg'
    },
    {
      name: 'Emily Davis',
      role: 'Business Head',
      image: '/images/test.jpeg'
    },
    {
      name: 'Faiyaz',
      role: 'Business Analyst',
      image: '/images/bios2.svg'
    },
    {
      name: 'Maha',
      role: 'Sales',
      image: '/images/bios3.svg'
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease',
    });
  })
  
  return (
    <><div className="aboutPage" data-aos="fade-in">
      <section className="heading">
       <div className='text' data-aos="fade-up">
         <small>A few Words...</small>
        <h1>About Us</h1>
       </div>
       
      </section>
      <section className="aboutFounder">
        <img src="/images/aboutuspic.jpg" alt="model" width="300px" data-aos="fade-in"/>
        <div className='textContent' data-aos="fade-right" data-aos-duration="1000">
          <h5>Shrinidhi Gehnewal</h5>
          <h3>About the Founder</h3>
          <h4>
          Similique libero quaerat
            exercitationem delectus ipsum, maiores unde sit amet consectetur adipisicing elit. Expedita,
            quod!
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error hic
            quae dicta rerum! Vitae dolor sit similique libero quaerat
            exercitationem delectus ipsum, maiores unde accusantium natus quos
            nostrum possimus autem a maxime fugit sunt repellat incidunt
            deserunt molestiae cupiditate omnis? Est excepturi adipisci corporis
            non magni asperiores distinctio eius nulla.
          </p>
          <p>
          Sed ut fringilla dolor. Morbi suscipit a nunc eu finibus. Nam rutrum mattis velit eget volutpat. Fusce egestas mi urna, id pulvinar ipsum dictum eget. Mauris in dolor velit. Vestibulum finibus felis non massa commodo molestie at id justo. Quisque sollicitudin elit sit amet facilisis euismod. Fusce at arcu sed.
          </p>
        </div>
      </section>
    </div>
      
    <AboutUsContainer>
      <Title data-aos="fade-up">Team Bios</Title>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} data-aos="zoom-in" data-aos-duration="400"
          data-aos-delay="50">
            <MemberImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamContainer>
    </AboutUsContainer>


    <PageWrapper>
      <Header>
        <Title1>Our Craftsmanship</Title1>
        <Subtitle>Discover the intricate details and techniques that go into creating our exquisite jewelry.</Subtitle>
      </Header>
      
      <Section>
        <SectionTitle>Jewelry Making Techniques</SectionTitle>
        <SectionContent>
          <Technique>
            <TechniqueImage src="/images/crafting1.jpg" alt="Technique 1" />
            <TechniqueTitle>Hand Engraving</TechniqueTitle>
            <TechniqueDescription>
              Our master craftsmen meticulously hand engrave each piece, adding a unique touch to every jewelry item.
            </TechniqueDescription>
          </Technique>
          <Technique>
            <TechniqueImage src="/images/crafting2.jpg" alt="Technique 2" />
            <TechniqueTitle>Stone Setting</TechniqueTitle>
            <TechniqueDescription>
              We use precision tools to set each stone by hand, ensuring the highest quality and security.
            </TechniqueDescription>
          </Technique>
        </SectionContent>
      </Section>
      
      <Section>
        <SectionTitle>Our Artisans</SectionTitle>
        <SectionContent>
          <Technique>
            <TechniqueImage src="/images/crafting3.jpg" alt="Artisan 1" />
            <TechniqueTitle>Master Jeweler</TechniqueTitle>
            <TechniqueDescription>
              With decades of experience, our master jeweler leads the team in creating stunning, bespoke pieces.
            </TechniqueDescription>
          </Technique>
          <Technique>
            <TechniqueImage src="/images/crafting4.jpg" alt="Artisan 2" />
            <TechniqueTitle>Stone Setter</TechniqueTitle>
            <TechniqueDescription>
              Our stone setter is an expert in ensuring each gemstone is placed perfectly, enhancing its natural beauty.
            </TechniqueDescription>
          </Technique>
        </SectionContent>
      </Section>
    </PageWrapper>
    </>
  )
}

export default About