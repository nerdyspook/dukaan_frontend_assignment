import "./App.css";
import Features from "./components/Features/Features";
import FreeProducts from "./components/FreeProducts/FreeProducts";
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/Results/Results";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar className="navbar" />
        <Results />
      </header>
      <main>
        <Features />
        <FreeProducts />
      </main>
    </div>
  );
};

export default App;
