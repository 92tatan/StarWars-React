import React from "react";
import { NavBar } from "../../NavBar";
import sections from "../../Assets/sections.js";
import { CardSection } from "./CardPages";
import {Col ,Row, Container} from "react-bootstrap";

export const Home = () => {

  
  return (
    <>
        <NavBar />
        <div style={{
          backgroundImage: 'url("https://i.pinimg.com/originals/20/33/a6/2033a62d31c74361858c6acc187c1663.jpg")',
          height: "1080px", backgroundRepeat: "no-repeat" }}> 
          <Container>
          <h1 class="text-secondary " ><center>Star Wars Fan Page</center></h1> <br></br>
          <Row className="mb-3">
          {sections.map((section) => (
            <Col xs={6} key={section.id}>
            <CardSection section={section} />
            </Col>
          ))}
          </Row>
          </Container>
        </div>
        </>
  );
}