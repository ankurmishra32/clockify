import React from "react";
import TimeTracker from "./TimeTracker";
import Projects from "./Projects";

export default function Content({ content, projectList, addProject, addTime }) {
  return (
    <div className="content">
      {content === 0 ? (
        <TimeTracker projectList={projectList} addTime={addTime} />
      ) : (
        <Projects projectList={projectList} addProject={addProject} />
      )}
    </div>
  );
}
