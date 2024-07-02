import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";

import Testimonials from "./Components/Testimonials/Testimonials";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Services />

        <Portfolio />

        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default App;
