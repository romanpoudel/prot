import "./App.css";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="header   ">
        <Navbar />
      </div>
      <div className="body">
        <Intro />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
