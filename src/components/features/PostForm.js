import { Button } from 'react-bootstrap';
import { TextArea } from '../common/TextArea';
import { TextInput } from '../common/TextInput';
import { useState } from 'react';
import PropTypes from 'prop-types';

export function PostForm({ action, actionText, ...props }) {
  const [title, setTitle] = useState(props.title ? props.title : '');
  const [author, setAuthor] = useState(props.author ? props.author : '');
  const [publishedDate, setDate] = useState(
    props.publishedDate ? props.publishedDate : ''
  );
  const [shortDescription, setDescription] = useState(
    props.shortDescription ? props.shortDescription : ''
  );
  const [content, setContent] = useState(props.content ? props.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
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
        value={publishedDate}
        onChange={(e) => setDate(e.target.value)}
        id='Published'
        placeholder='Enter date'
        type='text'
      ></TextInput>
      <TextArea
        value={shortDescription}
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
        {actionText}
      </Button>
    </form>
  );
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};