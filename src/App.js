import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import UpdateTask from "./components/UpdateTask";
import CreateTask from "./components/CreateTask";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/create" element={<CreateTask />} />
      <Route path="/update/:taskid" element={<UpdateTask />} />
      <Route path="/details/:taskid" element={<TaskDetails />} />
    </Routes>
  );
}

export default App;
