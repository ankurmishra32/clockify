import { useState } from "react";

export default function AddProject({ addProject }) {
  const [projectName, setProjectName] = useState("");

  return (
    <div className="contantContainer">
      <input
        type="text"
        onChange={(e) => setProjectName(e.target.value)}
        value={projectName}
      />
      <button
        onClick={() => {
          setProjectName("");
          addProject(projectName);
        }}
      >
        + Project
      </button>
    </div>
  );
}
