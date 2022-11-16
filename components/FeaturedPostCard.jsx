import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72 mx-3">
    <div className="absolute rounded-lg bg-center shadow-zinc-200 shadow-inner hover:shadow-none bg-no-repeat bg-cover inline-block w-full h-72 cursor-pointer" style={{ backgroundImage: `url('${post.featuredImage.url}')` }}>
      <div className="absolute rounded-lg bg-center bg-gradient-to-b  to-black w-full h-72" />
        <div>
        <Link href={`/post/${post.slug}`}>
          <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full z-10">
            <span className="cursor-pointer absolute w-full h-full" />
            <p className="text-white my-2 text-shadow font-semibold text-xs" style={{textShadow: "0 0 60px black"}}>{moment(post.createdAt).format('MMM, YYYY')}</p>
            <p className="text-white mb-4 text-shadow font-bold text-2xl text-center" style={{textShadow: "0 0 60px black"}}>{post.title}</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default FeaturedPostCard;


