import service from "./service";

const URL = "/api/projects";

const createProjectService = (newProject) => {
  return service.post(URL, newProject);
  // axios.post(`localhost:5005/api/projects`, reqBody, { headers: `Bearer storedToken`})
};

const getAllProjectsService = () => {
  return service.get(URL);
};

const getProjectService = (id) => {
  return service.get(URL + "/" + id);
};

const updateProjectService = (id, editedProject) => {
  return service.put(URL + "/" + id, editedProject);
};

const deleteProjectService = (id) => {
  return service.delete(URL + "/" + id);
};

export {
  createProjectService,
  deleteProjectService,
  getAllProjectsService,
  getProjectService,
  updateProjectService,
};
