import React, { useState } from "react";
import axios from "axios";

export default function CreateTask() {
  const [formData, setFormData] = useState({
    Content: "",
    Username: "bedo-2003",
    Title: "", // Assuming this is a default value
    Image: null,
  });

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };
  const handleImageChange = (e) => {
    setFormData(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://task.ecmpp.com/api/task/add",
      headers: {},
      data: formData, // Send form data as the request payload
    };

    axios
      .request(config)
      .then((response) => {
        console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="px-28" onSubmit={handleSubmit}>
        <h1 className="py-6">Add Task</h1>

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
            value={formData.Content}
            onChange={handleInputChange}
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
            value={formData.Username}
            onChange={handleInputChange}
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
            value={formData.Title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            value={formData.Image}
            onChange={handleImageChange}
          />
          <p
            className="mt-1 text-sm text-gray-200 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
