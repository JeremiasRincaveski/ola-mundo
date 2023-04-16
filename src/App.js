import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio } from "./components/Inicio";
import { SobreMin } from "./components/SobreMin";
import Header from "./components/Header";
import Footer from "components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremin" element={<SobreMin />} />
        <Route path="*" element={<div>error...</div>}/>
      </Routes>
    
      <Footer />
    </BrowserRouter>
  );
}

export default App;
