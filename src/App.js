import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Results from "./components/Results/Results";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar className="navbar" />
        <Results />
      </header>
    </div>
  );
};

export default App;
