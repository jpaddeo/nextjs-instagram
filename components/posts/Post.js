import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from '@firebase/firestore';

import Moment from 'react-moment';

import { db } from '../../libs/firebase';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user?.username,
      userImage: session.user?.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user?.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user?.uid), {
        username: session.user?.username,
      });
    }
  };

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) =>
          setComments(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          )
      ),
    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    [db, id]
  );

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session.user?.uid) !== -1
    );
  }, [likes]);

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
      {session && (
        <div className='flex items-center justify-between p-4'>
          <div className='flex space-x-4'>
            <div className='flex flex-col'>
              {hasLiked ? (
                <HeartIconFilled
                  className='post-button !text-red-600'
                  onClick={likePost}
                />
              ) : (
                <HeartIcon className='post-button' onClick={likePost} />
              )}
              {likes.length > 0 && (
                <p className='font-bold'>{likes.length} likes</p>
              )}
            </div>
            <ChatIcon className='post-button' />
            <PaperAirplaneIcon className='post-button' />
          </div>
          <BookmarkIcon className='post-button' />
        </div>
      )}
      {/* Caption */}
      <p className='px-5 py-2 truncate border-b border-gray-200'>
        <span className='font-bold mr-2'>{username}</span>
        {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className='ml-10 mt-4 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'>
          {comments.map((comment) => (
            <div
              key={comment.id}
              className='flex items-center truncate mb-3 space-x-2'
            >
              {comment.userImage ? (
                <img
                  src={comment.userImage}
                  alt='User comment image'
                  className='h-7 rounded-full'
                />
              ) : (
                <span className='h-7 w-7 rounded-full bg-gray-600 text-white text-center'>
                  {comment.username[0].toUpperCase()}
                </span>
              )}

              <p className='text-sm flex-1'>
                <span className='font-bold mr-2'>{comment.username}</span>
                {comment.comment}
              </p>
              <Moment fromNow className='pr-5 text-xs text-gray-400'>
                {comment.timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input */}
      {session && (
        <form className='flex items-center py-2 px-4'>
          <EmojiHappyIcon className='h-7' />
          <input
            className='border-none flex-1 focus:ring-0 outline-none'
            type='text'
            placeholder='Add a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type='submi'
            className='font-semibold text-blue-400'
            disabled={!comment.trim()}
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
