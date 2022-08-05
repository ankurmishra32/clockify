import React from "react";
import ProjectList from "./ProjectList";

export default function TimeTracker({ projectList, addTime }) {
  return (
    <div>
      <ProjectList
        projectList={projectList}
        showTime={true}
        addTime={addTime}
      />
    </div>
  );
}
