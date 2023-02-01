import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Colections from "./components/colections";
import AboutUs from "./components/aboutus";
import Contact from "./components/contact";

import Login from "./components/login";
// import Admin from "./components/admin";
import Tanaman from "./components/dashboard/tanaman";
import TamabahTanaman from "./components/dashboard/tambahTanaman";
import Admin from "./components/dashboard/admin";
import TambahAdmin from "./components/dashboard/tambahAdmin";
import Profile from "./components/dashboard/profile";
import Pesan from "./components/dashboard/pesan";
import TanamanDetail from "./components/dashboard/tanamanDetail";

// import Tanaman from "./components/tanaman";

function App() {
  return (
    <Router>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="colections" element={<Colections />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />

        {/* admin Only */}
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="pesan" element={<Pesan />} />
        <Route path="profile" element={<Profile />} />
        <Route path="tambahtanaman" element={<TamabahTanaman />} />
        <Route path="tambahadmin" element={<TambahAdmin />} />
        <Route path="tanaman" element={<Tanaman />} />
        <Route path="tanaman/:tanamanId" element={<TanamanDetail />} />

        {/* <Route path="tanaman" element={<Tanaman />}>
          <Route path=":tanamanId" element={<TanamanDetail />} />
          <Route path="tanamanId" element={<TanamanDetail />} />
        </Route> */}
        {/* not found */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
