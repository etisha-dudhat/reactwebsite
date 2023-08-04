import logo from "./logo.svg";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Contact from "./component/Contact";
import About from "./component/About";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
import Watch from "./component/Watch";
import Footer from "./component/Footer";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/about" Component={About}/>
        <Route exact path="/services" Component={Services}/>
        <Route exact path="/contact" Component={Contact}/>
        <Route path="*" Component={Home}/>
      </Routes>
      <Footer/>
      {/* <Watch/> */}
    </>
  );
}

export default App;
