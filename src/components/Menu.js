import React from "react";

export default function Menu({ setContent }) {
  return (
    <ul className="menu">
      <li onClick={() => setContent(0)}>Time Tracker</li>
      <li onClick={() => setContent(1)}>Project</li>
    </ul>
  );
}
