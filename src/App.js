import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";


function App() {
  return (
    <>
    <BrowserRouter>
    <Cabecera />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nuevo-video" element={<NuevoVideo />} />
    </Routes>
    
    
    </BrowserRouter>
    


   </>
  );
}

export default App;
