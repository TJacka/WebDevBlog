import React from 'react';
import moment from 'moment';
import Link from 'next/link';

export default function AdjacentPostCard({ post, position }) {
  return (
    <div>
      <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b  w-full h-72 shadow-inner shadow-white" />
          <div className="flex flex-col rounded-lg items-center justify-center absolute w-full h-full">
            <p className="text-white text-shadow font-bold text-3xl text-center">{post.title}</p>
            <p className="text-white text-shadow font-semibold text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
          </div>
        <div>
        <Link href={`/post/${post.slug}`}><span className="z-10 cursor-pointer absolute w-full h-full" /></Link>
        {position === 'LEFT' && (
          <div className="absolute arrow-btn bottom-5 text-center py-3 px-3 cursor-pointer bg-blue-600 left-4 rounded-full adjacent-post shadow-inner shadow-gray-400 transform inline-block text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
        )}
        {position === 'RIGHT' && (
          <div className="absolute arrow-btn bottom-5 text-center py-3 px-3 cursor-pointer bg-blue-600 right-4 rounded-full adjacent-post shadow-inner shadow-gray-400 transform hover:bg-blue-700 hover:text-white inline-block text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white text-center w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
