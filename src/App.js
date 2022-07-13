import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import About from "./components/about";
import Home from "./components/home";
import Cart from "./components/cart";
import Nursery from "./components/nursery";
import puppyatrics from "./components/puppyatrics";

import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <header className="App-header">
        <h1>Welcome to Chiwowwows and More!</h1>
    </header>
    <div className="App">
      <BrowserRouter>
         <Navbar className="navbar">
         </Navbar>

         <Routes>
            <Route path="/" element={ <Home> } />
            <Route path="/cart" element={ <Cart> } />
            <Route path="/catalog" element={ <Catalog> } />
            <Route path="/about" element= { <About> } />
            <Route path="puppyatrics" element= { <Puppyatrics> } />
            <Route path="nursery" element={ <Nursery> } />
         </Routes>

         <Footer>
            const Footer = () => {
               return (
                <section className="ky">Located in Kentucky</div>
                <section className="store">Order online 24/7</section>
                <section className="help">For any issues, call 502-345-6789</section>
            }
         </Footer>
      </Browser-Router>
    </div>  
  );
};

export default App;
