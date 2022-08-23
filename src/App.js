import "./App.css";
import Features from "./components/Features/Features";
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
      </main>
    </div>
  );
};

export default App;
