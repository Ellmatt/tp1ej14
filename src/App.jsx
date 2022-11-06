import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Admin from "./components/views/Admin";
import Error404 from "./components/views/Error404";
import DetalleReceta from "./components/views/DetalleReceta";
import CrearReceta from "./components/views/recetas/CrearReceta";
import EditarReceta from "./components/views/recetas/EditarReceta";
import Nav from './components/common/Nav'
import Footer from "./components/common/Footer";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
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
        element={<CrearReceta></CrearReceta>}
      ></Route>
      <Route
        exact
        path="/administrar/editar/:id"
        element={<EditarReceta></EditarReceta>}
      ></Route>
      <Route
        exact
        path="/detalle-receta/:id"
        element={<DetalleReceta></DetalleReceta>}
      ></Route>
    <Route
          exact
          path="/login"
          element={<Login></Login>}
        ></Route>
        <Route
          exact
          path="/register"
          element={<Register></Register>}
        ></Route>
      <Route path="*" element={<Error404></Error404>} />
    </Routes>
   <Footer></Footer>
  </BrowserRouter>
  );
}

export default App;
