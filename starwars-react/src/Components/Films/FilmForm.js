import React, { useState , useEffect} from "react";
import { Card,Button,Row ,Col, Accordion,ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import {ListToSearch} from "../../ApiArray";

export const FilmForm = ({filmtoshow}) => {
    const Personajes = [];
    /*const [filmnames, setFilmnames] = useState([]);

    useEffect(() => {
    const awaitlist = async () => {
      const Charac = await ListCharacters(filmtoshow.characters);
      Personajes.push(Charac);
      console.log(Charac);
      
    };
    awaitlist()
    },  []);
    const awaitlist = async () => {
        const Personajes= await ListCharacters(filmtoshow.characters);
        const Charac = await Personajes ;
        return Charac;
        };*/
    //for(let i=0; i< list.length;i++){
    //  searchEach(i);
    //};
    //setPersonaje([filmtoshow.characters]);
    //console.log(list);
    const [filmnames, setFilmnames] = useState([ListToSearch(filmtoshow.characters)]);
    //const Personas= (ListToSearch(filmtoshow.characters));
    
    //setPersonaje(...ListCharacters(filmtoshow.characters));
    //console.log(awaitlist());
    
    console.log(filmnames[0]);
    return (
        <>
        <Card style={{ width: '24rem' }} className="mb-3" bg="dark" text="secondary">
        <Card.Body>
            <Card.Title>{filmtoshow.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Espisodio: {filmtoshow.episode_id} </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"> Director: {filmtoshow.director} {filmtoshow.producer} </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"> Fecha Lanzamiento: {filmtoshow.release_date} </Card.Subtitle>

                <Accordion defaultActiveKey="0" className="mb-3"  >
                <Accordion.Item eventKey="1">
                <Accordion.Header>Información </Accordion.Header>
                <Accordion.Body>Dialogo Apertura: {filmtoshow.opening_crawl}</Accordion.Body>
                <Accordion.Body>Personajes: {filmnames.map((personaje) => (personaje.name)) }
                    </Accordion.Body>

                <Accordion.Body>Planetas: {filmtoshow.planets}</Accordion.Body>
                <Accordion.Body>Starships: {filmtoshow.starships}</Accordion.Body>
                <Accordion.Body>Vehiculos: {filmtoshow.vehicles}</Accordion.Body>
                <Accordion.Body>Especies: {filmtoshow.species}</Accordion.Body>
                </Accordion.Item>
                </Accordion>
            
            <Button  variant="secondary" href="/" >Home</Button>
            <br /><br />
            <Row className="mb-3">
            <Col><Link to={`/films/${filmtoshow.episode_id}`}>
            <Button variant="secondary"  >Ver Película</Button></Link>
            </Col>
                        
            </Row>
        </Card.Body>
        </Card>
       
        </>
    )
};