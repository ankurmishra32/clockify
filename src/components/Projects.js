import React from "react";
import AddProject from "./AddProject";
import ProjectList from "./ProjectList";

export default function Projects({ projectList, addProject }) {
  return (
    <div>
      <AddProject addProject={addProject} />
      <ProjectList projectList={projectList} />
    </div>
  );
}
