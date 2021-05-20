import { useState, useEffect } from 'react';

const useInitialState = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/initialState');
        const data = await response.json();
        return setVideos(data);
      } catch {
        console.log(error);
      }
    };
    fetchVideos();
  }, []);
  return videos;
};

export default useInitialState;
