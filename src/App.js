import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header"></header>
      <h1>Welcome to Chiwowwows and More!</h1>

      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
};

export default App;
