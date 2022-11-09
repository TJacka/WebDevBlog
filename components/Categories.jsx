import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className='bg-white rounded-lg p-8 mb-2 pb-2 text-left'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
