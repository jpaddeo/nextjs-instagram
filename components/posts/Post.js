import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-5'>
        <img
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
          src={userImg}
          alt='User'
        />
        <p className='flex-1 font-bold'>{username}</p>
        <DotsHorizontalIcon className='post-button' />
      </div>
      {/* Image */}
      <img className='object-cover w-full' src={img} alt='Post image' />
      {/* Buttons */}
      <div className='flex items-center justify-between p-4'>
        <div className='flex space-x-4'>
          <HeartIcon className='post-button' />
          <ChatIcon className='post-button' />
          <PaperAirplaneIcon className='post-button' />
        </div>
        <BookmarkIcon className='post-button' />
      </div>
      {/* Caption */}
      <p className='p-5 truncate'>
        <span>{username}</span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          className='border-none flex-1 focus:ring-0 outline-none'
          type='text'
          placeholder='Add a comment...'
        />
        <button className='font-semibold text-blue-400'>Post</button>
      </form>
    </div>
  );
}

export default Post;
