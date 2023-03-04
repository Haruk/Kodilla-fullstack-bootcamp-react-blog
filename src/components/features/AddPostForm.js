import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { PostForm } from './PostForm';

export function AddPostForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = ({ title, publishedDate, shortDescription, content, author, category }) => {
    dispatch(addPost({ 
      title: title,
      shortDescription: shortDescription,
      content: content,
      publishedDate: publishedDate,
      author: author,
      category: category }));
    navigate('/');
  };

  return <PostForm action={handleSubmit} actionText='Add Post'></PostForm>;
}