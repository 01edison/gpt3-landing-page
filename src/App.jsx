import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Logos from "./components/logos/Logos";
import Inquiry from "./components/inquiry/Inquiry";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Logos />
      <Inquiry />
    </div>
  );
}

export default App;
