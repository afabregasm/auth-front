import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteProjectService,
  getProjectService,
  updateProjectService,
} from "../services/project.service";

function EditProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectService(projectId)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
      })
      .catch((err) => console.log(err));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const requestBody = { title: title, description: description };
    updateProjectService(projectId, requestBody)
      .then(() => {
        navigate(`/projects/${projectId}`);
      })
      .catch((err) => console.log(err));
  };

  const deleteProject = () => {
    deleteProjectService(projectId)
      .then(() => {
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>

      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
