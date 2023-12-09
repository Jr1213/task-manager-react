import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateTask = ({ match }) => {
  const [task, setTask] = useState({});
  const [formData, setFormData] = useState({
    content: '',
    title: '',
    image: null,
  });

  useEffect(() => {
    const fetchTaskDetails = async (e) => {
      try {
        const response = await axios.get(`https://task.ecmpp.com/api/task/Show/${match.params.id}`);
        setTask(response.data);
        setFormData({
          content: response.data.content,
          title: response.data.title,
          image: response.data.image, // Assuming you want to update the image as well
        });
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    };

    fetchTaskDetails();
  }, [match.params.id]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={task}>
        <label>
          Content:
          <textarea name="content" value={formData.content} onChange={handleInputChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <label>
          Image:
          <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        </label>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default UpdateTask;
