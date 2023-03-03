import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByID } from '../../redux/postsRedux';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { removePost } from '../../redux/postsRedux';
import { useDispatch } from 'react-redux';

export function Post() {
  const { id } = useParams();
  const post = useSelector((state) => getPostByID(state, id));

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const dispatch = useDispatch();

  const handleRemovePost = () => {
    dispatch(removePost(id));
  };

  if (!post) return <Navigate to='/' />;
  else
    return (
      <>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completely remove this post from the app.
            <br></br>Are you sure you want to do that?
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button onClick={handleRemovePost} variant='danger'>
              Remove
            </Button>
          </Modal.Footer>
        </Modal>

        <div className='w-75 px-md-5 mx-auto'>
          <div className='d-flex justify-content-between'>
            <h2>{post.title}</h2>
            <div>
              <Link to={`/post/edit/${id}`}>
                <Button className='m-2' variant='outline-info'>
                  Edit
                </Button>
              </Link>
              <Button
                onClick={handleShowModal}
                className='m-2'
                variant='outline-danger'
              >
                Delete
              </Button>
            </div>
          </div>
          <p className='mb-0'>
            <span className='fw-bold'>Author: </span>
            {post.author}
          </p>
          <p>
            <span className='fw-bold'>Published: </span>
            {post.publishedDate}
          </p>
          <p>{post.content}</p>
        </div>
      </>
    );
}