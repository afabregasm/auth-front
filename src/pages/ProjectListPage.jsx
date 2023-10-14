import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddProject from "../components/AddProject";
import { getAllProjectsService } from "../services/project.service";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    getAllProjectsService()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />
      {projects.map((project) => {
        return (
          <div className="ProjectCard card" key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectListPage;
