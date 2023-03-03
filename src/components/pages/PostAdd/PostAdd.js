import { AddPostForm } from '../../features/AddPostForm';

export function PostAdd() {
  return (
    <div className='w-75 m-auto'>
      <h1>Add post</h1>
      <AddPostForm></AddPostForm>
    </div>
  );
}