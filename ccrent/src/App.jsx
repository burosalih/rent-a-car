import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuth from "./useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Vozila from "./pages/Vozila";
import Rent from "./pages/Rent";

function App() {

  const { isLoggedIn, isLoading } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/vozila" element={<Vozila />} />
        <Route path="/rent/:id" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
