import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectService } from "../services/project.service";

function ProjectDetailPage() {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();

  useEffect(() => {
    getProjectService(projectId)
      .then((response) => {
        setProject(response.data);
      })
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
        ))}
      <Link to={`/projects/${projectId}/edit`}>
        <button>Edit Project</button>
      </Link>

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
    </div>
  );
}

export default ProjectDetailPage;
