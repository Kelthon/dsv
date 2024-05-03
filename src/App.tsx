import MenuBars from "./components/MenuBar/MenuBar";
import ToolBar from "./components/ToolBar/ToolBar";
import Workspace from "./components/Workspace/Workspace";

function App(): JSX.Element {
  return (
    <>
      <MenuBars />
      <ToolBar />
      <Workspace />
    </>
  );
}

export default App;
