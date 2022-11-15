import { Container } from "react-bootstrap";
import FormAdd from "./components/Form";
import NavHeader from "./components/Navbar";
import TableList from "./components/Table";

const App = () => {
  return (
    <>
      <NavHeader />
      <Container>
        <FormAdd />
        <TableList />
      </Container>
    </>
  );
};

export default App;
