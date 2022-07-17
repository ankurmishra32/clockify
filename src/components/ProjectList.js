import Project from "./Project"

export default function ProjectList({projectList, showTime, addTime}) {
  return (
    <div>
        {projectList.map((project) => (
            <div key={project.id} className="project">
                <Project project={project} showTime={showTime} addTime={addTime} />
            </div>
        ))}
    </div>
  )
}
