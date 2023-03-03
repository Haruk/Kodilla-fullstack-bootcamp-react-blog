import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PostCard(props) {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='p-3 border border-secondary rounded'>
        <h3>{props.title}</h3>
        <p className='mb-0'>
          <span className='fw-bold'>Author: </span>
          {props.author}
        </p>
        <p>
          <span className='fw-bold'>Published: </span>
          {props.date}
        </p>
        <p>{props.description}</p>
        <Link to={`post/edit/${props.id}`}>
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  );
}