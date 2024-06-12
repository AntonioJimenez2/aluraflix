import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import Pie from "./components/Pie"


function App() {
  return (
    <>
    <BrowserRouter>
    <Cabecera />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nuevo-video" element={<NuevoVideo />} />
    </Routes>
    <Pie />
    
    
    </BrowserRouter>
    


   </>
  );
}

export default App;
