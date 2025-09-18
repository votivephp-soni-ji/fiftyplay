import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FundraisingProducts from "./pages/FundraisingProducts";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import EventDetail from "./pages/EventDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import PaymentPage from "./pages/PaymentPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/payment" element={<PaymentPage />} />
          <Route
            path="/fundraising-products"
            element={<FundraisingProducts />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/event-detail" element={<EventDetail />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
  );
}

export default App;
