import ContextToolBar from "../ContextToolBar/ContextToolBar";
import DrawableArea from "../DrawableArea/DrawableArea";
import "./Display.css";

export default function Display(): JSX.Element {
  return (
    <div id="display">
      <ContextToolBar />
      <DrawableArea />
    </div>
  );
}
