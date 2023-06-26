import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      {/* <Slide direction="down"> */}
        <h1>My Services</h1>
      {/* </Slide> */}
      <Cards>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Web Development"}
            disc={`Storyboarding | Wireframing | Development | Testing | Deployment | Scheduled - Maintanience | Scaling`}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Web Consultation"}
            disc={`Project consultation covering scope of project, tools needed, costs, and maintainence strategies.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;


const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 0;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  padding: 1em;
  gap: 1rem;
`;
