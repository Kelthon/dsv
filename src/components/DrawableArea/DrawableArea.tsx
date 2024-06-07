import { useRef } from "react";
import "./DrawableArea.css";

export default function Viewport(): JSX.Element {
  const canvas = useRef<HTMLCanvasElement>(null);

  return <canvas id="drawable-area" ref={canvas}></canvas>;
}
