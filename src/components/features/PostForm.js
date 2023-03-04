import { Button } from 'react-bootstrap';
// import { TextArea } from '../common/TextArea';
// import { TextInput } from '../common/TextInput';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { FormLabel, FormControl } from 'react-bootstrap';

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

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content });
    }
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={validate(handleSubmit)}>

      <FormLabel className='mt-3'>Title</FormLabel>
      <FormControl
        {...register('title', { required: true, minLength: 4 })}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='Enter title'
      />
      {errors.title && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required and must contain at least 4 characters
        </small>
      )}

      <FormLabel className='mt-3'>Author</FormLabel>
      <FormControl
        {...register('author', { required: true, minLength: 4 })}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder='Enter author'
        type='text'
      />
      {errors.author && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required and must contain at least 4 characters
        </small>
      )}

      <p className='mb-1 mt-3'>Published</p>
      <DatePicker
        className='px-2'
        selected={publishedDate}
        onChange={(date) => {
          setDate(date);
        }}
      ></DatePicker>
      {dateError && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required
        </small>
      )}

      <FormLabel className='mt-3'>Short description</FormLabel>
      <FormControl
        {...register('description', { required: true, minLength: 20 })}
        value={shortDescription}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Leave a comment here'
        as='textarea'
        rows={5}
      />
      {errors.description && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required and must contain at least 20 characters
        </small>
      )}

      <p className='mb-1 mt-3'>Main content</p>
      <ReactQuill
        theme='snow'
        value={content}
        onChange={setContent}
        placeholder='Leave a comment here'
      ></ReactQuill>
      {contentError && (
        <small className='d-block form-text text-danger mt-1'>
          Content can't be empty
        </small>
      )}

      <Button type='submit' className='d-block mt-3'>
        {actionText}
      </Button>
    </form>
  );
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};