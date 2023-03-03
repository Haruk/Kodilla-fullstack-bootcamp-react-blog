import { Post } from '../../features/Post';

export function SinglePost() {
  return (
    <>
      <h1 className='text-center mb-5'>The post you have chosen:</h1>
      <Post></Post>
    </>
  );
}