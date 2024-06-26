import { Routes, Route } from 'react-router';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import Videos from './components/Videos';
import CreateVideo from './Pages/CreateVideo';
import Blogs from './components/Blogs';
import WhoAreWe from './components/WhoAreWe';
import Auth from './Pages/Auth';
import Footer from './components/Footer';
import ContactWithUs from './components/ContactWithUs';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Videos/create" element={<CreateVideo />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Route>
        <Route path="/ContactUs" element={<ContactWithUs />} />
        <Route path="/WhoAreWe" element={<WhoAreWe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
