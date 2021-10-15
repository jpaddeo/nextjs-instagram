import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from '@firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../libs/firebase';

import Post from './posts/Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsuscribe = onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    );
    return unsuscribe; // clean up
  }, [db]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.profileImg}
          img={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
