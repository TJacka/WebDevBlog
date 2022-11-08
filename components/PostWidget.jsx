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
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4 cursor-pointer">
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
              <div className='flex'>
                <div className='w-16 mt-1 flex-none'>
                  <Image 
                    loader={graphCMSImageLoader}
                    src={post.featuredImage.url} 
                    alt={post.title}
                    className='align-middle rounded-full hover:rounded-lg' 
                    width='50'
                    height='50'
                  />
                </div>
                <div className='flex flex-col ml-4 mt-1'>
                  <p className='text-gray-500 font-xs'>
                    {moment(post.createdAt).format('MMM DD, YYYY')}
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
