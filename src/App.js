import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import UpdateTask from "./components/UpdateTask";
import CreateTask from "./components/CreateTask";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <Routes>
      <Route path="/" Component={TaskList} />
      <Route path="create" component={CreateTask} />
      <Route path="update/:id" component={UpdateTask} />
      <Route path="details" component={TaskDetails} />
    </Routes>
  );
}

export default App;
