import { useEffect, useState } from 'react';
import faker from 'faker';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fakerSuggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(fakerSuggestions);
  }, []);
  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See all</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className='flex items-center justify-between mt-3'
        >
          <img
            className='h-10 w-10 rounded-full border p-[2px]'
            src={suggestion.avatar}
            alt=''
          />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
            <h3 className='text-cs text-gray-400 truncate'>
              Works at {suggestion.company.name}
            </h3>
          </div>
          <button className='text-xs text-blue-400'>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
