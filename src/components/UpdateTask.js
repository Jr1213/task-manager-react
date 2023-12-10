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
    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(`https://task.ecmpp.com/api/task/Show/${match.params.id}`);
        setTask(response.data);
        setFormData({
          content: response.data.content,
          title: response.data.title,
          image: null, // Assuming you don't want to prefill the image input with the existing image
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('content', formData.content);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('image', formData.image);

      await axios.put(`https://task.ecmpp.com/api/task/Update/${match.params.id}`, formDataToSend);

      // Handle success or redirect to task list page
      console.log('Task updated successfully!');
    } catch (error) {
      // Handle error or show error messages
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
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
