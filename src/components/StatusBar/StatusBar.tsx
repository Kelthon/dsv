import {
  RiAlertLine,
  RiCloseCircleLine,
  RiFullscreenExitLine,
  RiFullscreenLine,
  RiInformationLine,
  RiPlayLine,
  RiRewindLine,
  RiSkipBackLine,
  RiSkipForwardLine,
  RiSpeedLine,
  RiTimerLine,
  RiZoomInLine,
  RiZoomOutLine,
} from "@remixicon/react";
import "./StatusBar.css";

export default function StatusBar(): JSX.Element {
  return (
    <div id="status-bar">
      <div id="lint-info">
        <button type="button" title="show info messages">
          <RiInformationLine />
          <span className="message-count interface-title">0</span>
        </button>
        <button type="button" title="show warning messages">
          <RiAlertLine />
          <span className="message-count interface-title">0</span>
        </button>
        <button type="button" title="show error messages">
          <RiCloseCircleLine />
          <span className="message-count interface-title">0</span>
        </button>
      </div>
      <div id="animation-info">
        <button type="button" title="skip back animation">
          <RiSkipBackLine />
        </button>
        <button type="button" title="rewind animation">
          <RiRewindLine />
        </button>
        <button type="button" title="play animation">
          <RiPlayLine />
        </button>
        <button type="button" title="speed animation">
          <RiSpeedLine />
        </button>
        <button type="button" title="skip forward animation">
          <RiSkipForwardLine />
        </button>
        <div id="time-control">
          <RiTimerLine />
          <select id="time-speed" title="select animation time speed">
            <option value="0.5">0.5x</option>
            <option value="1" selected>
              1x
            </option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>
      </div>
      <div id="display-info">
        <p id="display-mouse-pos">
          <span className="axis">x: 100</span>
          <span className="axis">y: 100</span>
        </p>
        <div id="zoom-control">
          <button type="button" title="zoom in">
            <RiZoomInLine />
          </button>
          <select id="zoom" title="select zoom level">
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100" selected>
              100%
            </option>
            <option value="150">150%</option>
            <option value="200">200%</option>
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
    </div>
  );
}
