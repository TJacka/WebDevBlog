import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { graphCMSImageLoader } from '../utils';

const PostCard = ({ post }) => (
  <div className="rounded-lg p-0 pb-8">
    <Link href={`/post/${post.slug}`}>
      <div className='cursor-pointer'>
        <div className="grid grid-cols-2 shadow-zinc-400 shadow-inner rounded-md p-10 h-60 lg:h-80" style={{ backgroundImage: `url('${post.featuredImage.url}')` }}>
          <div className='flex flex-col justify-between w-full'>
            <div>
              <h1 className="transition duration-700 mb-6 cursor-pointer hover:text-zinc-300 text-4xl font-bold text-white text-shadow">
                {post.title}
              </h1>
              <div>
                <p className="text-start text-md leading-6 text-white text-shadow font-semibold post-descr">
                  {post.excerpt}
                </p>
              </div>
            </div>
            </div>
              <div className="flex lg:flex flex-col text-end items-end justify-between mb-1">
                <div>
                  <div className="flex items-center mb-4 lg:mb-0 w-full lg:w-auto poster">
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
                    <span className="align-middle font-bold text-white text-shadow">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                  </div>
                  </div>
                  <div>
                    <Link href={`/post/${post.slug}`}>
                      <span className="transition duration-500 ease shadow-inner shadow-gray-400 transform hover:bg-blue-700 hover:text-white inline-block bg-blue-600 text-white text-lg font-bold rounded-full px-6 py-2 cursor-pointer xs:text-sm">Continue Reading</span>
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
