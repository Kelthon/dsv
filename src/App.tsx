import "./App.css";
import Canvas from "./components/Canvas";
import MenuBars from "./components/MenuBar";

function App(): JSX.Element {
  return (
    <>
      <MenuBars />
      <Canvas />
    </>
  );
}

export default App;
