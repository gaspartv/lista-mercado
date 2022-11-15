import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { GlobalContext } from "../../contexts/GlobalContext";

const TableList = () => {
  const { myList, backgroundC } = useContext(GlobalContext);

  return (
    <>
      <p>
        Total:{" "}
        {myList
          .reduce((a, b) => Number(a) + Number(b.price), 0)
          .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {myList &&
            myList.map((product, index) => (
              <tr
                style={{
                  backgroundColor: product.bg,
                }}
                onClick={() => backgroundC(index)}
                key={index}
              >
                <td>{product.product}</td>
                <td>
                  {Number(product.price).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableList;
