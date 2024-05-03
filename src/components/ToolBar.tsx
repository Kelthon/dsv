import {
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
  RiFileCopyLine,
  RiFileLine,
  RiSurveyLine,
  RiFolderLine,
  RiPlayFill,
  RiPrinterLine,
  RiSave3Line,
  RiScissorsLine,
  RiNodeTree,
  RiTerminalBoxLine,
  RiCodeLine,
  RiBug2Line,
  RiFlaskLine,
  RiLayout3Line,
  RiLayoutRowLine,
  RiLayoutLine,
  RiUploadLine,
  RiSettings3Line,
  RiToolsLine,
} from "@remixicon/react";
import "./ToolBar.css";

export default function ToolBar(): JSX.Element {
  return (
    <ul id="tool-bar">
      <li>
        <button type="button" title="open file">
          <RiFileLine />
        </button>
      </li>
      <li>
        <button type="button" title="open folder">
          <RiFolderLine />
        </button>
      </li>
      <li>
        <button type="button" title="save">
          <RiSave3Line />
        </button>
      </li>
      <li>
        <button type="button" title="print">
          <RiPrinterLine />
        </button>
      </li>
      <li>
        <button type="button" title="undo">
          <RiArrowGoBackLine />
        </button>
      </li>
      <li>
        <button type="button" title="redo">
          <RiArrowGoForwardLine />
        </button>
      </li>
      <li>
        <button type="button" title="paste">
          <RiSurveyLine />
        </button>
      </li>
      <li>
        <button type="button" title="copy">
          <RiFileCopyLine />
        </button>
      </li>
      <li>
        <button type="button" title="cut">
          <RiScissorsLine />
        </button>
      </li>
      <li>
        <button type="button" title="new structure">
          <RiNodeTree />
        </button>
      </li>
      <li>
        <button type="button" title="run script">
          <RiPlayFill />
        </button>
      </li>
      <li>
        <button type="button" title="toggle code editor">
          <RiCodeLine />
        </button>
      </li>
      <li>
        <button type="button" title="toggle console">
          <RiTerminalBoxLine />
        </button>
      </li>
      <li>
        <button type="button" title="toggle aside menu">
          <RiLayout3Line />
        </button>
      </li>
      <li>
        <button type="button" title="toggle bottom menu">
          <RiLayoutRowLine />
        </button>
      </li>
      <li>
        <button type="button" title="toggle right menu">
          <RiLayoutLine />
        </button>
      </li>
      <li>
        <button type="button" title="export">
          <RiUploadLine />
        </button>
      </li>
      <li>
        <button type="button" title="project settings">
          <RiToolsLine />
        </button>
      </li>
      <li>
        <button type="button" title="settings">
          <RiSettings3Line />
        </button>
      </li>
    </ul>
  );
}
