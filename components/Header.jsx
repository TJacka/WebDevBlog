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
    <div className='container mx-auto pb-5 lg:sticky relative top-0 z-10 bg-black px-5'>
        <div className='border-b w-full inline-block border-silver-400 py-4'>
                <div className=''>
                        <Link href="/">
                                <div className='flex justify-between items-center'>
                                        <div>
                                                <span className='cursor-pointer font-bold text-3xl text-white shadow-inner text-shadow'>
                                                        Connecting The Dots
                                                </span>
                                        </div>
                                        <div>
                                                <p className='cursor-pointer font-bold text-lg text-slate-300 text-right'>
                                                        Web Tech Blog
                                                </p>
                                        </div>
                                </div>
                        </Link>
                </div>
        </div>
    </div>
  );
};

