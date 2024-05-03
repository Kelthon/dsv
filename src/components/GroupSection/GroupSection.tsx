import { RiArrowDropDownLine } from "@remixicon/react";
import React from "react";
import "./GroupSection.css";

interface GroupSectionProps {
  title: string;
  children?: React.ReactNode;
}

export default function GroupSection({
  title,
  children,
}: GroupSectionProps): JSX.Element {
  return (
    <div className="group-section">
      <header>
        <button type="button" className="toggle-expand">
          <RiArrowDropDownLine />
          <span className="interface-title">{title}</span>
        </button>
      </header>
      {children}
    </div>
  );
}
