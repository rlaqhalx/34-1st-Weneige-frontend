import { useEffect, useState } from 'react';
import './Categories.scss';

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch('/data/categoryData.json')
      .then(res => res.json())
      .then(data => {
        setCategoryData(data);
      });
  }, []);
  return (
    <>
      {categoryData.map(({ id, title }) => {
        return (
          <li key={id}>
            <span className="category">{title}</span>
          </li>
        );
      })}
    </>
  );
};

export default Categories;
