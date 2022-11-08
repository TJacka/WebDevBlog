import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { graphCMSImageLoader } from '../utils';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-6 pb-12 mb-8">
    <Link href={`/post/${post.slug}`}>
      <div className='cursor-pointer'>
        <div className="grid grid-cols-2 rounded-lg p-10 h-60 lg:h-80" style={{ backgroundImage: `url('${post.featuredImage.url}')` }}>
          <div className='flex flex-col justify-between w-full'>
            <div>
              <h1 className="transition duration-700 mb-6 cursor-pointer hover:text-blue-400 text-4xl font-bold text-white text-shadow">
                {post.title}
              </h1>
              <div>
                <p className="text-start text-md leading-6 text-white text-shadow font-semibold">
                  {post.excerpt}
                </p>
              </div>
            </div>
            </div>
              <div className="flex lg:flex flex-col text-center items-end justify-between mb-1">
                <div>
                  <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto items-center">
                    <Image
                      unoptimized
                      loader={graphCMSImageLoader}
                      alt={post.author.name}
                      height='30'
                      width='30'
                      className="align-middle rounded-full"
                      src={post.author.photo.url}
                    />
                    <p className="inline align-middle text-white ml-2 text-shadow font-bold text-lg">{post.author.name}</p>
                  </div>
                  <div className="font-medium text-gray-700 mt-2 mb-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3 ml-1 text-white text-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle font-bold text-white text-shadow">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                  </div>
                  </div>
                  <div>
                    <Link href={`/post/${post.slug}`}>
                      <span className="transition duration-500 ease shadow-md transform hover:bg-green-700 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-6 py-2 cursor-pointer">Continue Reading</span>
                    </Link>
                  </div>
                </div>  
              </div>
            </div>          
          </Link>
  </div>
);
{/* <Image
  unoptimized
  loader={graphCMSImageLoader}
  src={post.featuredImage.url}
  alt={post.title}
  className="shadow-lg rounded-t-lg lg:rounded-lg"
  layout="fill"
  objectFit='cover'
/> */}
{/* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
  <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
</div> */}

export default PostCard;
