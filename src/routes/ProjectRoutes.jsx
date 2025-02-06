import React from "react";
import CreateProject from "../pages/Projects/CreateProject/CreateProject";
import Project from "../pages/Projects/Project/Project";

const ProjectRoutes = [
  { path: "/projects/create", element: <CreateProject /> },
  { path: "/projects", element: <Project /> },
];

export default ProjectRoutes;
