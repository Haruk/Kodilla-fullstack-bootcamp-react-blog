import { Button } from 'react-bootstrap';
import { TextArea } from '../common/TextArea';
import { TextInput } from '../common/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

export function AddPostForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addPost({
        title: title,
        shortDescription: description,
        content: content,
        publishedDate: date,
        author: author,
      })
    );
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id='Title'
        placeholder='Enter title'
        type='text'
      ></TextInput>
      <TextInput
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        id='Author'
        placeholder='Enter author'
        type='text'
      ></TextInput>
      <TextInput
        value={date}
        onChange={(e) => setDate(e.target.value)}
        id='Published'
        type='date'
      ></TextInput>
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id='Short description'
        placeholder='Leave a comment here'
        rows='5'
      ></TextArea>
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        id='Main content'
        placeholder='Leave a comment here'
        rows='10'
      ></TextArea>
      <Button type='submit' className='d-block'>
        Add Post
      </Button>
    </form>
  );
}