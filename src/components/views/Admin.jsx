import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { consultarApi } from "../helpers/queris";
import ItemReceta from "./recetas/ItemReceta";
import { Link } from "react-router-dom";

const Admin = () => {
  const [receta, setRecetas] = useState([]);

  useEffect(() => {
    consultarApi().then((respuesta) => {
      setRecetas(respuesta);
    });
  }, []);
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <Link className="btn btn-primary" to="/administrar/crear">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Receta</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Descripcion</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {receta.map((receta, id) => (
            <ItemReceta
              key={id}
              receta={receta}
              setRecetas={setRecetas}
            ></ItemReceta>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Admin;
