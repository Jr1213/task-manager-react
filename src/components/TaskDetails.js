import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  let { taskid } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://task.ecmpp.com/api/task/Show/${taskid}`
        );
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
          <form className="px-28">
            <h1 className="py-6">Show Task ({taskid})</h1>
            

            <div className="mb-6">
              <img className="w-1/2" alt="" src={task.image}/>
            </div>
            <div className="mb-6">
              <label
                htmlFor="Content"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Content:
              </label>
              <input
                type="text"
                id="Content"
                className="bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={task.content}
                readOnly
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Username:
              </label>
              <input
                type="text"
                id="Username"
                className="bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={task.username}
                readOnly
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="Title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Title
              </label>
              <input
                type="text"
                id="Title"
                className="bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={task.title}
                readOnly
              />
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskDetails;
