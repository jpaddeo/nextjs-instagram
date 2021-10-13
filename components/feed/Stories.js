import { useEffect, useState } from 'react';

import Story from './Story';

import faker from 'faker';

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fakerStories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setStories(fakerStories);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
      {stories.map((story) => (
        <Story key={story.id} image={story.avatar} username={story.username} />
      ))}
    </div>
  );
}

export default Stories;
