// components/CreateTask/CreateTask.js
import React, { useState } from "react";
import axios from "axios";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    content: "",
    title: "",
    username: "bedo-2003", // Set a default or get it dynamically
    image: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("content", formData.content);
      formDataToSend.append("title", formData.title);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("image", formData.image);

      const response = await axios.post(
        "https://task.ecmpp.com/api/task/add",
        formDataToSend
      );

      // Assuming your API response contains some data, you might want to handle it
      console.log("Task created successfully:", response.data);

      // Clear the form after successful submission
      setFormData({
        content: "",
        title: "",
        username: "bedo-2003", // Set a default or get it dynamically
        image: "",
      });

    } catch (error) {
      // Handle error or show error messages
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="create-task">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Content:
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        {/* You can hide or disable the username field if it's not editable */}
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            disabled // If it's not editable
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
