import MenuBars from "./components/MenuBar/MenuBar";
import StatusBar from "./components/StatusBar/StatusBar";
import ToolBar from "./components/ToolBar/ToolBar";
import Workspace from "./components/Workspace/Workspace";

function App(): JSX.Element {
  return (
    <>
      <MenuBars />
      <ToolBar />
      <Workspace />
      <StatusBar />
    </>
  );
}

export default App;
