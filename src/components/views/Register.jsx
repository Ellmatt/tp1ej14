import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearUsuarioAPI } from "../helpers/queris";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navegacion = useNavigate();


  const onSubmit = (datos) => {
   
    crearUsuarioAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Usuario Creado",
          "Has iniciado sesion correctamente",
          "success"
        );
       reset('')
        navegacion('/')
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo más tarde", "error");
      }
    });
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Register
      </h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: pepito@gmail.com"
            {...register("email", {
              required: "Este dato es obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message: "Usuario incorrecto",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: pepito123?"
            {...register("password", {
              required: "La password es incorrecta",
              pattern: {
                value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                message: "Contraseña incorrecta",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </section>
  );
};

export default Register;