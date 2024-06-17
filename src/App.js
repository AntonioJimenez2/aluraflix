import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import Home from "./pages/Home";
import NuevoVideo from "./pages/NuevoVideo";
import Pie from "./components/Pie";
import ModalZoom from "./components/ModalZoom/";
import GlobalContextProvider from "./context/GlobalContext";

function App() {
  return (
    <>
    <GlobalContextProvider>

    
      <BrowserRouter>
        <Cabecera />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuevo-video" element={<NuevoVideo />} />
        </Routes>
        <Pie />
        <ModalZoom />
      </BrowserRouter>
      </GlobalContextProvider>
    </>
  );
}

export default App;
