import ContextToolBar from "../ContextToolBar/ContextToolBar";
import Viewport from "../Viewport/Viewport";
import "./Display.css";

export default function Display(): JSX.Element {
  return (
    <div id="display">
      <ContextToolBar />
      <Viewport />
    </div>
  );
}
