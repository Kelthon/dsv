import {
  RiPlayLine,
  RiRewindLine,
  RiSkipBackLine,
  RiSkipForwardLine,
  RiSpeedLine,
  RiTimerLine,
} from "@remixicon/react";

export default function AnimationInfo() {
  return (
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
        <select
          id="time-speed"
          title="select animation time speed"
          defaultValue="1"
        >
          <option key="0.5" value="0.5">
            0.5x
          </option>
          <option key="1" value="1">
            1x
          </option>
          <option key="1.5" value="1.5">
            1.5x
          </option>
          <option key="2" value="2">
            2x
          </option>
        </select>
      </div>
    </div>
  );
}
