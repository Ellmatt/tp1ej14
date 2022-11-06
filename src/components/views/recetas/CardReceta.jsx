import React from "react";
import { Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardReceta = (props) => {
  return (
    <Card className="my-4">
      <Card.Img variant="top" src={props.imagen} className="img-fluid" />
      <Card.Body>
        <Card.Title>{props.nombreReceta}</Card.Title>

        <Badge bg="success">{props.categoria}</Badge>
        <Card.Text>Precio: ${props.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          className="btn btn-danger me-2"
          to={`/detalle-receta/${props.id}`}
        >
          Ver más
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default CardReceta;
