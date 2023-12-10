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

        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Cover photo
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    value={formData.Image}
                    onChange={handleImageChange}
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
