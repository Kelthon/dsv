import MenuBars from "./components/MenuBar/MenuBar";
import StatusBar from "./components/StatusBar/StatusBar";
import ToolBar from "./components/ToolBar/ToolBar";
import Workspace from "./components/Workspace/Workspace";
import { ViewportProvider } from "./hooks/Viewport";

function App(): JSX.Element {
  return (
    <ViewportProvider>
      <MenuBars />
      <ToolBar />
      <Workspace />
      <StatusBar />
    </ViewportProvider>
  );
}

export default App;
