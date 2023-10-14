import { Route, Routes } from "react-router-dom";

import "./App.css";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";
import Navbar from "./components/Navbar";
import EditProjectPage from "./pages/EditProjectPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ProjectListPage from "./pages/ProjectListPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/projects"
          element={
            <IsPrivate>
              <ProjectListPage />
            </IsPrivate>
          }
        />
        <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="/projects/:projectId/edit" element={<EditProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
