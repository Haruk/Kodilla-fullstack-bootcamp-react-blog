import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../../redux/categoriesReducer';

export const Categories = () => {
  const allCategories = useSelector(getAllCategories);
  return (
    <div className='text-center'>
      <h1 className='mb-5'>All categories</h1>
      {allCategories.map((category) => {
        return (
          <Link key={category} to={`/category/${category}`}>
            <Button className='m-2 mb-5'>{category}</Button>
          </Link>
        );
      })}
    </div>
  );
};