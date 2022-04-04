import React from "react";
import {Card , Button} from "react-bootstrap";


export const CardSection = ({section}) => {
    return(
        <>
      <Card border="light" style={{ width: '23rem' }} className="mb-3" bg="dark" text="light">
        <Card.Img variant="top" src={section.url} />
        <Card.Body>
          <Card.Title>{section.SecTitle}</Card.Title>
          
          <Button variant="secondary" href={section.link}>Conoce mas...</Button>
        </Card.Body>
      </Card>
    </>
    )};