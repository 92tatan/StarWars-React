import React from "react";
import { NavBar } from "../../NavBar";
import { useEffect, useState } from "react";
import {Row , Container, Col} from "react-bootstrap";

import CallApi from "../../Api";
import {FilmForm} from "./FilmForm";

export const Film = () => {
  const [films, setFilms] = useState([{}]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await CallApi("films/");
      setFilms(response.results);
    };
    
    fetchData();
  }, []);

  console.log(films);

  return (
    <>
      <NavBar />
        <div style={{
          backgroundImage: 'url("https://wallpapercave.com/wp/xTkHBfj.jpg")',
           backgroundRepeat: "repeat"}}> 
        <Container>
        <h1 >Films</h1><br></br>
        <Row className="mb-3">
        {films.map((film) => (
          <Col xs={6}  key={film.episode_id} >
          <FilmForm filmtoshow={film} />
          </Col>
         ))}
        </Row>
      </Container>
      </div>

    </>
  );
}