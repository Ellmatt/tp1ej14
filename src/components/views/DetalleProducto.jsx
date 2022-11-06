import { Badge, Card, Col, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { obtenerProductoApi } from "../helpers/queris";

const DetalleProducto = () => {
  const [detalle, setDetalle] = useState([]);
  console.log(detalle);

  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    obtenerProductoApi(id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 201) {
        setDetalle(respuesta.dato);
      } else {
        Swal.fire(
          "ocurrio un error",
          "intente este de nuevo en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <Card className="container my-5 mainSection">
      <Row className="w-75">
        <Col md={6}>
          <Image src={detalle.imagen} alt="brownie" className="w-100" />
        </Col>
        <Col md={6} className="py-3">
          <Card.Title>{detalle.nombreProducto}</Card.Title>
          <hr />
          <Badge bg="success">{detalle.categoria}</Badge>
          <Card.Text className="mt-3">
            <b>Precio: ${detalle.precio}</b>
          </Card.Text>
          <Card.Text>{detalle.descripcion}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default DetalleProducto;
