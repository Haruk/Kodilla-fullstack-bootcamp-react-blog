import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { PostCard } from './PostCard';

export function PostList() {
  const allPosts = useSelector(getAllPosts);

  return (
    <div className='row g-3'>
      {allPosts.map((post) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.shortDescription}
            date={post.publishedDate}
            author={post.author}
            category={post.category}
          ></PostCard>
        );
      })}
    </div>
  );
}