import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { GlobalContext, iMyList } from "../../contexts/GlobalContext";

function GridAutoSizingColMixExample() {
  const { addProduct, removeProduct } = useContext(GlobalContext);
  const { register, handleSubmit } = useForm<iMyList>();

  return (
    <Form onSubmit={handleSubmit(addProduct)}>
      <Row className="align-items-center mt-4">
        <Col sm={3} className="my-1">
          <Form.Control
            type="text"
            placeholder="nome do produto..."
            {...register("product")}
          />
        </Col>

        <Col sm={3} className="my-1">
          <Form.Control
            type="number"
            placeholder="valor do produto..."
            {...register("price")}
          />
        </Col>

        <Col
          style={{ display: "flex", justifyContent: "space-between" }}
          className="my-1"
        >
          <Button type="submit">Adicionar</Button>
          <Button onClick={() => removeProduct()}>Remover</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default GridAutoSizingColMixExample;
