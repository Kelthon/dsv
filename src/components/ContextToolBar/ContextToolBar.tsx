import {
  RiCursorLine,
  RiDragMove2Line,
  RiEraserLine,
  RiPaintFill,
  RiPencilLine,
  RiSipLine,
  RiText,
} from "@remixicon/react";
import "./ContextToolBar.css";

export default function ContextToolBar(): JSX.Element {
  return (
    <div id="context-tool-bar">
      <ul id="edit-tools">
        <li>
          <button type="button" title="select tool">
            <RiCursorLine />
          </button>
        </li>
        <li>
          <button type="button" title="move tool">
            <RiDragMove2Line />{" "}
          </button>
        </li>
        <li>
          <button type="button" title="pencil tool">
            <RiPencilLine />
          </button>
        </li>
        <li>
          <button type="button" title="erase tool">
            <RiEraserLine />
          </button>
        </li>
        <li>
          <button type="button" title="text tool">
            <RiText />
          </button>
        </li>
        <li>
          <button type="button" title="paint tool">
            <RiPaintFill />
          </button>
        </li>
        <li>
          <button type="button" title="sip tool">
            <RiSipLine />
          </button>
        </li>
        <li>
          <input type="color" name="color-pick" id="color-pick" />
        </li>
      </ul>
      <footer>
        <ul id="context-tools"></ul>
      </footer>
    </div>
  );
}
