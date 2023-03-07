import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsByCategory } from '../../../redux/postsRedux';
import { PostCard } from '../../features/PostCard';

export const SingleCategory = () => {
  const { category } = useParams();
  const postsByCategory = useSelector((state) =>
    getPostsByCategory(state, category)
  );
  return (
    <div>
      <h1 className='mb-5'>Category: {category}</h1>
      <div className='row g-3'>
        {postsByCategory.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.shortDescription}
            date={post.publishedDate}
            author={post.author}
            category={post.category}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};