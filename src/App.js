import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import UpdateTask from "./components/UpdateTask";

function App() {
  return (
    <Routes>
      <Route path="/" Component={TaskList} />
      <Route path="/update/:id" component={UpdateTask} />

    </Routes>
  );
}

export default App;
