import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PostList } from '../../features/PostList';

export function Home() {
  return (
    <div>
      <div className='d-flex justify-content-between mb-5'>
        <h1 className='m-0'>All posts</h1>
        <Link to='/post/add'>
          <Button variant='outline-info' size='lg'>
            Add Post
          </Button>
        </Link>
      </div>
      <PostList></PostList>
    </div>
  );
}