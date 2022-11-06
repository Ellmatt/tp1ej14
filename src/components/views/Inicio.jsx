import { Container, Row } from "react-bootstrap";
import CardProducto from "./productos/CardProducto";
import { consultarApi } from "../helpers/queris";
import { useEffect, useState } from "react";

const Inicio = () => {
  const [producto, setProducto] = useState([]);
  console.log(producto);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);

  return (
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
        {/* aqui van las columnas */}
        {producto.map((receta, id) => (
          <CardProducto
            key={id}
            nombreReceta={receta.nombreReceta}
            precio={receta.precio}
            imagen={receta.imagen}
            categoria={receta.categoria}
            id={receta._id}
          ></CardProducto>
        ))}
      </Row>
    </Container>
  );
};

export default Inicio;
