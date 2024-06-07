import { DetailedHTMLProps, CanvasHTMLAttributes, forwardRef } from "react";
import "./DrawableArea.css";
import { useViewport } from "../../hooks/Viewport";

const Canvas = forwardRef<
  HTMLCanvasElement,
  DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>
>((props, ref) => {
  return <canvas id="drawable-area" ref={ref} {...props}></canvas>;
});

export default function DrawableArea() {
  const viewportRef = useViewport();

  return <Canvas ref={viewportRef} />;
}
