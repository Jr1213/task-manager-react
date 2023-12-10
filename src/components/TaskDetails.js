import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  let { taskid } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://task.ecmpp.com/api/task/Show/${taskid}`);
        setTask(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [taskid]); // Make sure to include taskid as a dependency

  return (
    <div>
      {task ? (
        <div>
          <h1>Task Title: {task.title}</h1>
          {/* Display other task details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskDetails;
