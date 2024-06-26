import logo from "./logo.svg";
import "./App.css";
// import sidebar from "./Components/sidebar/sidebar";
// import home from "./Components/home/home";
// import mission from "./Components/mission/mission";
// import services from "./Components/services/services";
// import resume from "./Components/resume/resume";
// import portfolio from "./Components/portfolio/portfolio";
// import pricing from "./Components/pricing/pricing";
// import testimonials from "./Components/testimonials/testimonials";
// import blog from "./Components/blog/blog";
// import contact from "./Components/contact/contact";

import home from "./Components/home/home";
const App = () => {
  return (
    <>
      <sidebar />
      <main className="main">
        <home />
        <mission />
        <services />
        <resume />
        <portfolio />
        <pricing />
        <testimonials />
        <blog />
        <contact />
      </main>
    </>
  );
};

export default App;
