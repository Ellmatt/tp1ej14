import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Admin from "./components/views/Admin";
import Error404 from "./components/views/Error404";
import DetalleProducto from "./components/views/DetalleProducto";
import CrearProducto from "./components/views/productos/CrearProducto";
import EditarProducto from "./components/views/productos/EditarProducto";
import Nav from './components/common/Nav'
import Footer from "./components/common/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route exact path="/" element={<Inicio></Inicio>}></Route>
      <Route
        exact
        path="/administrador"
        element={<Admin></Admin>}
      />
      <Route
        exact
        path="/administrar/crear"
        element={<CrearProducto></CrearProducto>}
      ></Route>
      <Route
        exact
        path="/administrar/editar/:id"
        element={<EditarProducto></EditarProducto>}
      ></Route>
      <Route
        exact
        path="/detalle-producto/:id"
        element={<DetalleProducto></DetalleProducto>}
      ></Route>
    
      <Route path="*" element={<Error404></Error404>} />
    </Routes>
   <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
