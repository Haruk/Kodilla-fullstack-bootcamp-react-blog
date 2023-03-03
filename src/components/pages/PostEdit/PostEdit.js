import { EditPostForm } from '../../features/EditPostForm';

export function PostEdit() {
  return (
    <div className='w-75 m-auto'>
      <h1>Edit your post</h1>
      <EditPostForm></EditPostForm>
    </div>
  );
}