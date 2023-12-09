// components/CreateTask/CreateTask.js
import React, { useState } from "react";
import axios from "axios";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    content: "",
    title: "",
    username: "bedo-2003",
    image: null,
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
    } catch (error) {
      // Handle error
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
