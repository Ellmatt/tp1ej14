 const URL = 'http://localhost:4000/apiReceta/recetas'
 const URLuser = "http://localhost:3004/usuarios";

 export const consultarApi = async () => {
    try {
     
      const respuesta = await fetch(URL);
      
      const listaProductos = await respuesta.json();
      // console.log(respuesta);
      return listaProductos;
    } catch (error) {
      console.log(error);
    }
  };

  
export const crearRecetaAPI = async (producto) => {
    try {
    
      const respuesta = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto),
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };




export const borrarRecetaAPI = async (id) => {
    try {
     
      const respuesta = await fetch(URL + "/" + id, {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerRecetaApi = async (id) => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const recetaBuscada = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
      return recetaBuscada;
    } catch (error) {
      console.log(error);
    }
  };


  export const editarRecetaApi = async (id, datosActualizados) => {
    try {
    
      const respuesta = await fetch(URL + "/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      });
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const consultarApiUsuario = async (usuario) => {
    console.log(usuario)
    try {
      
      const respuesta = await fetch(URLuser);
      const listaUsuarios = await respuesta.json();
      const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email )
      console.log(respuesta);
  
      if(usuarioBuscado){
        console.log('email encontrado')
        //verificar el password
        if(usuarioBuscado.password === usuario.password ){
          console.log('pass encontrada')
          return usuarioBuscado
        }
      }else{
        console.log('el mail no existe')
        return
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  export const crearUsuarioAPI = async (usuarios) => {
    try {
      // fetch para peticiones
      // await para esperar
      const respuesta = await fetch(URLuser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarios),
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };
  
  

