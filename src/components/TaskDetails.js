import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskDetails = ({ match }) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(
          `https://task.ecmpp.com/api/task/Show/${match.params.id}`
        );
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchTaskDetails();
  }, [match.params.id]);

  return (
    <div>
      <h2>Task Details</h2>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Content:</strong> {task.content}
      </p>
      <p>
        <strong>Username:</strong> {task.username}
      </p>
      {task.image && (
        <div>
          <p>
            <strong>Image:</strong>
          </p>
          <img
            src={`https://task.ecmpp.com/storage/${task.image}`}
            alt="Task Image"
          />
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
