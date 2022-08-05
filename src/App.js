import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [content, setContent] = useState(0);
  const [projectList, setProjectList] = useState([]);
  const addProject = (name) => {
    const project = {
      id: projectList.length,
      name: name,
      time: "00:00:00",
    };
    setProjectList([...projectList, project]);
  };
  const addTime = (id, time) => {
    const pListClone = projectList.map((project) => {
      if (project.id !== id) {
        return project;
      }
      return { ...project, time };
    });
    setProjectList([...pListClone]);
  };
  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Menu setContent={setContent} />
        <Content
          content={content}
          projectList={projectList}
          addProject={addProject}
          addTime={addTime}
        />
      </div>
    </div>
  );
}

export default App;
