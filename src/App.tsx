import MenuBars from "src/components/MenuBar/MenuBar";
import { StatusBar } from "src/components/StatusBar";
import ToolBar from "src/components/ToolBar/ToolBar";
import Workspace from "src/components/Workspace/Workspace";
import { ViewportProvider } from "src/hooks/Viewport";

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
