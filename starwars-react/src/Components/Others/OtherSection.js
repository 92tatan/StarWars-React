import { NavBar } from "../../NavBar";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CallApi from "../../Api";


export const SectionShow =()=>{
  const [objeto, setobjeto] = useState([{}]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await CallApi("starships/");
      console.log(response);
      //setobjeto(response.results);
    };
    
    fetchData();
  }, []);

  //console.log(objeto);


    return(
    <>
        <NavBar />
        <div style={{
          backgroundImage: 'url("http://www.solofondos.com/wp-content/uploads/2016/07/Star-Wars-wallpaper-1920x1080.jpg")',
           backgroundRepeat: "repeat"}}> 
        <Container>
        <h1 >Films</h1><br></br>
        <Row className="mb-3">hola
        {/* {objeto.map((objeto) => (
          <Col xs={6}  key={objeto.episode_id} >
          <FilmForm filmtoshow={film} />
          </Col>
         ))} */}
        </Row>
      </Container>
      </div>

    </>
    );
};