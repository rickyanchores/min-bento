import Image from "next/image";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Nav from "./Components/Nav/Nav";

export default function App() {
  return (
    <div className="App grid justify-center items-center">
        <Nav />
        <Home />
        <About />
        <Gallery />
        <Contact />
        <Footer />
    </div>
  );
}
