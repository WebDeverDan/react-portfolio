import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className="green">Daniel Bradley</h1>
          <h3>Full Stack Web Developer</h3>
          <p>
          Full stack web developer specializing in Ruby on Rails and API development. In-depth knowledge of manufacturing REST APIs, front-end and back-end development, team and project management, media editing, and presentation software, along with content creation and business sales abilities. Multilingual and fluent in Spanish and Korean. Proven record of creating effective manufacturing consumption APIs, maximizing application efficiency, and maintaining professional business relationships.
          </p>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src="/react-portfolio/images/Daniel_Bradley.8b243bd5.jpg"
            alt="profile"
            class="profile-photo"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  padding-top: 8rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color: #9ab0c9;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
    color: #fff
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 20rem;
    filter: drop-shadow(0 0 0.75rem #9ab0c9);
    transition: transform 400ms ease-in-out;
    
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }
  :hover img {
    transform: translateY(-10px);
  }
`;
