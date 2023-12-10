import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://task.ecmpp.com/api/task/all/bedo-2003"
        );
        setTasks(response.data); // Assuming the response.data is an array of tasks
        console.log(tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <div className="bg-white p-8 rounded-md w-3/4 m-auto">
        <div className=" flex items-center justify-between pb-6">
          <div>
            <h1 className="text-gray-600 font-semibold">Taskes</h1>
            <span className="text-xs">All task item</span>
          </div>
          <div className="flex items-center justify-between">
           
            <Link to={"create"}>
              <div className="lg:ml-40 ml-10 space-x-8">
                <button className="bg-green-500 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                  Add Task
                </button>
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Title
                    </th>

                    <th className=" px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Options
                    </th>
                  </tr>
                </thead>
                {tasks.map((task) => {
                  return (
                    
                    
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src={task.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {task.title}{" "}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {task.content}
                          </p>
                        </td>
                        <td>
                          <div
                            class="inline-flex rounded-md shadow-sm "
                            role="group"
                          >
                            <Link to={"create"}>
                              <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1  focus:text-blue-700 "
                              >
                                Add
                              </button>
                            </Link>
                            <Link to={`/details/${task.id}`}>

                            <button
                              type="button"
                              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1  focus:text-blue-700 "
                            >
                              Veiw
                            </button>
                            </Link>
                            <button
                              type="button"
                              class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1  focus:text-blue-700 "
                            >
                              Delete
                            </button>
                            <Link to={`/update/${task.id}`}>
                              <button
                                type="button"
                                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1  focus:text-blue-700 "
                              >
                                Edit
                              </button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
