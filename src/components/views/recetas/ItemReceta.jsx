import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarRecetaAPI, consultarApi } from "../../helpers/queris";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemReceta = (props) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "Esta seguro de eliminar este receta?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
      cancelButtonText: "Cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarRecetaAPI(props.receta._id).then((respuesta) => {
          if (respuesta.status === 200) {
            consultarApi().then((respuesta) => {
              props.setRecetas(respuesta);
            });
            Swal.fire("Borrado!", "Su receta a sido borrado!", "success");
          } else {
            Swal.fire(
              "Se produjo un error",
              "intente realizar esta operacion en otro momento!",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{props.receta._id}</td>
      <td>{props.receta.nombreReceta}</td>
      <td>{props.receta.precio}</td>
      <td>{props.receta.imagen}</td>
      <td>{props.receta.categoria}</td>
      <td>{props.receta.descripcion}</td>

      <td>
        <Link
          className="btn btn-warning"
          to={`/administrar/editar/${props.receta._id}`}
        >
          Editar
        </Link>
        <Button className="btn btn-danger" onClick={borrarReceta}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
