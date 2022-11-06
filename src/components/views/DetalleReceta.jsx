import { Badge, Card, Col, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { obtenerRecetaApi } from "../helpers/queris";

const DetalleReceta = () => {
  const [detalle, setDetalle] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    obtenerRecetaApi(id).then((respuesta) => {
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
          <Card.Title>{detalle.nombreReceta}</Card.Title>
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

export default DetalleReceta;
