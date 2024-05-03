import Viewport from "../Viewport/Viewport";
import AsideMenu from "../AsideMenu/AsideMenu";
import "./Workspace.css";

export default function Workspace(): JSX.Element {
  return (
    <div id="workspace">
      <AsideMenu />
      <Viewport />
    </div>
  );
}
