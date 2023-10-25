import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creaciones from "./Creaciones";
import Favoritos from "./Favoritos";
import Home from "./Home";
import Info from "./Info";
import Layout from "./Layout";


function App() {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
      
    <Route path="/" element={<Home/>}/>
    <Route path="/Creaciones" element={<Creaciones />} />
    <Route path="/Favoritos" element={<Favoritos />} />
    <Route path="/Info" element={<Info />} />

    </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
