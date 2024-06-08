import {
  RiAlertLine,
  RiCloseCircleLine,
  RiInformationLine,
} from "@remixicon/react";

export default function LintInfo() {
  return (
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
  );
}
