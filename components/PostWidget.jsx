import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image'
import { graphCMSImageLoader } from '../utils';

export default function PostWidget({ categories, slug }) {
  
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result));
    }
  }, [slug, categories]);
  
  return (
    <div className='bg-white rounded-lg pt-8 px-8 pb-4 mb-4'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Trending Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full cursor-pointer">
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
              <div className='flex mb-4'>
                <div className='w-16 mt-1 flex-none xl:block lg:hidden'>
                  <Image 
                    loader={graphCMSImageLoader}
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className='align-middle rounded-full shadow-inner shadow-gray-800' 
                    width='50'
                    height='50'
                  />
                </div>
                <div className='flex flex-col xl:ml-4 lg:ml-0 mt-1'>
                  <p className='text-gray-500 font-semibold text-sm'>
                    {moment(post.createdAt).format('MMM, YYYY')}
                  </p>
                  {post.title}
                </div>
              </div>
            </Link>
        </div>
      ))}
    </div>
  );
}
