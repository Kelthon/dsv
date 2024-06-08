import {
  RiFullscreenExitLine,
  RiFullscreenLine,
  RiZoomInLine,
  RiZoomOutLine,
} from "@remixicon/react";
import { useViewport } from "../../../hooks/Viewport";
import { useEffect, useState } from "react";

type Vector2D = {
  x: number;
  y: number;
};

export default function DisplayInfo() {
  const viewportRef = useViewport();
  const [mousePos, setMousePos] = useState<Vector2D>({ x: 0, y: 0 });

  useEffect(
    () =>
      viewportRef.current?.addEventListener(
        "mousemove",
        (event: MouseEvent) => {
          setMousePos({ x: event.clientX, y: event.clientY });
        },
      ),
    [],
  );

  return (
    <div id="display-info">
      <p id="display-mouse-pos">
        <span className="axis">x: {mousePos.x}</span>
        <span className="axis">y: {mousePos.y}</span>
      </p>
      <div id="zoom-control">
        <button type="button" title="zoom in">
          <RiZoomInLine />
        </button>
        <select id="zoom" title="select zoom level" defaultValue="100">
          <option key="25" value="25">
            25%
          </option>
          <option key="50" value="50">
            50%
          </option>
          <option key="75" value="75">
            75%
          </option>
          <option key="100" value="100">
            100%
          </option>
          <option key="150" value="150">
            150%
          </option>
          <option key="200" value="200">
            200%
          </option>
        </select>
        <button type="button" title="zoom out">
          <RiZoomOutLine />
        </button>
      </div>
      <button type="button" title="exit fullscreen">
        <RiFullscreenExitLine />
      </button>
      <button type="button" title="fullscreen">
        <RiFullscreenLine />
      </button>
    </div>
  );
}
