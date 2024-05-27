import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Vozila from "./pages/Vozila";
import Rent from "./pages/Rent";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./useAuth";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/vozila" element={<Vozila />} />
        <Route path="/rent/:id" element={<Rent />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
