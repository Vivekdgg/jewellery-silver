import React from 'react'
import styled from 'styled-components';
const Contact = () => {
  const ContactPageContainer = styled.section`
  .contactPage .heading {
    height: 66vh;
    width: 100%;
    background-image: url(/images/about.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    color: #5f3926;
  
  }
  
  .contactPage .heading small,
  .contactPage .textContent p {
    font-family: cursive;
    color: #5f3926;
  }
  
  .contactPage .heading h1 {
    font-family: cursive;
    margin-top: 0;
    color: #5f3926;
  }
  
  .contactPage .textContent p {
    font-family: monospace;
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: center;
    color: #5f3926;
    text-align: center;
    padding: 10px 16px;
    font-weight: 600;
  
  }

  .contactPage .textContent h3 {
    text-align: center;
    font-family: Cinzel Decorative, cursive, sans-serif;
    color: #5f3926;
    font-size: 5rem;
    margin-top: 0;
    font-weight: 700;
    font-style: normal;
  
  }

  .contactPage .location {
    flex-direction: column;
    padding-top: 30px;
  }
  
  .contactPage .contactForm {
    max-width: 500px;
    min-width: 320px;
    display: flex;
    justify-content: center;
    border: 5px double #dabec1;
    border-radius: 5px;
    min-height: 70vh;
    align-items: center;
    color: #5f3926;
  }
  .contactPage .contactForm form {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #dabec1;
    padding: 10px;
    border-radius: 5px;
    color: #5f3926;
  }
  .contactPage .contactForm .name{
    display: flex;
    justify-content: space-between;
  }
  .name input{
    max-width: 130px;
    
  }
  .contactPage .contactForm input{
    margin:20px 0.2rem;
    padding: 0.5em;
    border: 1px solid #dabec1;
    color: #5f3926;
  
  
  }
  .contactForm #contactEmail{
    width: 285px;
  }
  #story{
    max-width:265px;
    margin-bottom:20px;
    border: 1px solid #dabec1;
  }

   button {
    background: linear-gradient(#5f3926, #fff, #5f3926);
    border: 1px solid;
    border-radius: 5px;
    color: var(--primary-text-color);
    cursor: pointer;
    font-family: cursive;
    font-size: 1.3rem;
    font-weight: 700;
    margin: auto;
    padding: 0.9em 2em;
}
  @media (min-width:768px){
    .messageUsSection{
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      align-content: center;
      padding: 50px;
      gap:5rem;
    }

    @media (min-width: 768px) {
      .textContent h3 {
          font-size: 2rem;
          margin-top: 0;
      }
  
  
  }

  iframe {
    width: 100%;
    height: 450px;
    border: none;
  }
`;
  return (
    <>
     <ContactPageContainer>
      <section className="contactPage">
      <div className="heading">
        <small>Get in touch...</small>
        <h1> Contact Us</h1>
      </div>
      <div className="messageUsSection">
        <div className="textContent">
          <h3>Message Us</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            voluptates eos rerum quod nobis eaque consectetur incidunt deserunt
            odio animi.
          </p>
          <p className="location">
            <p>
              <span>
              <i className="fas fa-map-marker-alt"></i>
              </span>
              Place-12,Road-N2.City,State NN 20990
            </p>
            <p>
              {" "}
              <span>
              <i className="fas fa-envelope"></i>
              </span>{" "}
              info@jewelrycollection.com
            </p>
            <p>
              <span>
              <i className="fas fa-phone-alt"></i>
              </span>
              +91 00965321402
            </p>
          </p>
        </div>
        <div className="contactForm">
          <form
            action=""
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="http://shringaar.netlify.app/contact"
            />
            <div className="name">
              <input type="text" name="first_name" placeholder="First Name" required/>

              <input type="text" name="last_name" placeholder="Last Name" required/>
            </div>

            <input
              type="email"
              name="email"
              id="contactEmail"
              placeholder="email Id"
              required
            />

            <textarea
              id="story"
              name="story"
              rows="5"
              cols="15"
              placeholder="I recently had the pleasure of discovering Shringaar jwellery..."
            ></textarea>

            <button
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d170797.8327653595!2d73.65696696641196!3d19.921946582207333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sshringaar%20nshik!5e0!3m2!1sen!2sin!4v1685948098610!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
    </ContactPageContainer>
</>
  )
}

export default Contact