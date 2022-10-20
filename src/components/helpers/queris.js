 const URL = 'http://localhost:3003/productos'


 export const consultarApi = async () => {
    try {
     
      const respuesta = await fetch(URL);
      
      const listaProductos = await respuesta.json();
      console.log(respuesta);
      return listaProductos;
    } catch (error) {
      console.log(error);
    }
  };

  
export const crearProductoAPI = async (producto) => {
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




export const borrarProductoAPI = async (id) => {
    try {
     
      const respuesta = await fetch(URL + "/" + id, {
        method: "DELETE",
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
    }
  };

  export const obtenerProductoApi = async (id) => {
    try {
      const respuesta = await fetch(URL + "/" + id);
      const productoBuscado = {
        dato: await respuesta.json(),
        status: respuesta.status,
      };
  
      return productoBuscado;
    } catch (error) {
      console.log(error);
    }
  };


  export const editarProductoApi = async (id, datosActualizados) => {
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
  

