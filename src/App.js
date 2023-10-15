import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Footer/Copyright";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
}

export default App;
