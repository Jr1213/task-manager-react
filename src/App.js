import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import TaskDetails from './components/TaskDetails';

function App() {
  return (
    <Routes>
      
        <Route path="/" exact component={TaskList} />
        <Route path="/create" component={CreateTask} />
        <Route path="/update/:id" component={UpdateTask} />
        <Route path="/details/:id" component={TaskDetails} />
    </Routes>
  );
}

export default App;
