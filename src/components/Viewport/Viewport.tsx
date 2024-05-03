import { useRef } from "react";
import "./Viewport.css";

export default function Viewport(): JSX.Element {
  const canvas = useRef<HTMLCanvasElement>(null);

  return <canvas className="canvas" ref={canvas}></canvas>;
}
