import React from 'react';
import { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';

export default function Header() {
        
        const [categories, setCategories] = useState([]);
          
          useEffect(() => {
            getCategories()
              .then((newCategories) => setCategories(newCategories));
          }, []);
  
  return (
    <div className='container mx-auto pb-5 lg:sticky relative top-0 z-10 bg-black'>
        <div className='border-b w-full inline-block border-silver-400 py-4 mb-2'>
                <div className=''>
                        <Link href="/">
                                <div className='flex justify-between items-center'>
                                        <div>
                                                <span className='cursor-pointer font-bold text-3xl text-white shadow-inner text-shadow'>
                                                        Connecting The Dots
                                                </span>
                                        </div>
                                        <div>
                                                <span className='cursor-pointer font-bold ml-10 text-xl text-slate-300'>
                                                        Web Technology Blog
                                                </span>
                                        </div>
                                </div>
                        </Link>
                </div>
                {/* <div className='hidden md:float-left md:contents'>
                        {categories.map((category) => (
                                <Link key={category.slug} href={`/category/${category.slug}`}>
                                        <span className='md:float-right mt-2 align-middle text-slate-200 ml-4 font-semibold cursor-pointer'>
                                                {category.name}
                                        </span>
                                </Link>
                        ))}
                </div> */}
        </div>
    </div>
  );
};

