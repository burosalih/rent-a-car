import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuth from "./useAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { FaRegistered } from "react-icons/fa";

function App() {

  const { isLoggedIn, isLoading } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
