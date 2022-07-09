import "./App.css";
import Hrosecton from './Components/HeroSction'
import MySkills from "./Components/MySkills";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <Hrosecton/>
      <hr/>
      <MySkills/>
      <hr/>
      <Projects />
    </div>
  );
}

export default App;
