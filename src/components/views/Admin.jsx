import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { consultarApi } from "../helpers/queris";
import ItemProducto from "./productos/ItemProducto";
import { Link } from "react-router-dom";

const Admin = () => {
  const [productos, setProductos] = useState([]);
  console.log(productos)
  useEffect(() => {
    
    consultarApi().then((respuesta) => {
     
      setProductos(respuesta);
    });
  }, []);
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administrar/crear">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th >Descripcion</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, id) => (
            <ItemProducto
              key={id}
              producto={producto}
              setProductos={setProductos}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Admin;