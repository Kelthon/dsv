import AsideMenu from "../AsideMenu/AsideMenu";
import Display from "../Display/Display";
import "./Workspace.css";

export default function Workspace(): JSX.Element {
  return (
    <div id="workspace">
      <AsideMenu />
      <Display />
    </div>
  );
}
