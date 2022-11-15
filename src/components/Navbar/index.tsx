import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavHeader = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Lista de Compras</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
