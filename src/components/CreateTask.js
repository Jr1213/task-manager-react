// components/CreateTask/CreateTask.js
import React, { useState } from "react";
import axios from "axios";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    content: "",
    title: "",
    username: "",
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://task.ecmpp.com/api/task/add',
      headers: { },
      data: formData, // أرسل البيانات من النموذج
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
