import Post from './posts/Post';

const MOCK_POSTS = [
  {
    id: 123,
    username: 'jpaddeo',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Suscribe and destroy the like button',
  },
  {
    id: 124,
    username: 'jpaddeo',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Suscribe and destroy the like button',
  },
  {
    id: 125,
    username: 'jpaddeo',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Suscribe and destroy the like button',
  },
];

function Posts() {
  return (
    <div>
      {MOCK_POSTS.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
