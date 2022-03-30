import React from "react";
import { Navbar, Container, Nav, NavDropdown,Button,
    DropdownButton,Dropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

import sable from './Assets/star-wars-bar.webp';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark"  expand={false} >
    <Container fluid>
    <Navbar.Brand href="/">
      <img  src={sable}  width="160" height=""  className=""  alt=""
      />Star Wars
      <img src="https://cdn.pixabay.com/photo/2017/11/01/14/26/star-wars-2908144_960_720.png"
        width="160"  height=""  className=""  alt="" />
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
      className="navbar navbar-dark bg-dark"
        >
      <Offcanvas.Header closeVariant= "white" closeButton>
        <h4 class="text-light bg-dark">Menú</h4>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavDropdown.Divider /> 
          <Button variant="secondary" href="/films/" >Films</Button>
          <NavDropdown.Divider />
          <Button variant="secondary" href="/starships/" >Starships</Button>
        <NavDropdown.Divider />
        <Button variant="secondary" href="/vehicles/" >Vehicles</Button>
        <NavDropdown.Divider />
          <DropdownButton variant="secondary"  menuVariant="dark" title="Explore more..." className="mt-2" >
            <Dropdown.Item href="/species/">species</Dropdown.Item>
            <Dropdown.Item href="/planets/">planets</Dropdown.Item>
            <Dropdown.Item href="/people/">people</Dropdown.Item>
          </DropdownButton>
        <NavDropdown.Divider />
        <NavDropdown.Divider />
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  );
}
