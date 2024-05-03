import Canvas from "./components/Canvas";
import MenuBars from "./components/MenuBar";
import ToolBar from "./components/ToolBar";

function App(): JSX.Element {
  return (
    <>
      <MenuBars />
      <ToolBar />
      <Canvas />
    </>
  );
}

export default App;
