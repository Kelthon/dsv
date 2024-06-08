import "./StatusBar.css";
import LintInfo from "../LintInfo/LintInfo";
import AnimationInfo from "../AnimationInfo/AnimationInfo";
import DisplayInfo from "../DisplayInfo/DisplayInfo";

export default function StatusBar(): JSX.Element {
  return (
    <div id="status-bar">
      <LintInfo />
      <AnimationInfo />
      <DisplayInfo />
    </div>
  );
}
