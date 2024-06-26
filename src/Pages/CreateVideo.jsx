import React, { useState } from 'react';
import useRequest from '../hooks/useRequest';

const CreateVideo = () => {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const request = useRequest();

  const handleCreateLesson = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    if (video) formData.append('video', video);

    try {
      const response = await request.post('/video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Lesson created:', response.data);
      // history.push('/'); // Redirect to home or another page after successful creation
    } catch (error) {
      console.error('Error creating lesson:', error);
    }
  };

  return (
    <form onSubmit={handleCreateLesson}>
      <h2>Create Video</h2>
      <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input class type='file' accept='video/*' onChange={(e) => setVideo(e.target.files[0])} required />
      <button type='submit'>Create Video</button>
    </form>
  );
};

export default CreateVideo;
