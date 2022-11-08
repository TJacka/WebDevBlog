import React from 'react';
import Image from 'next/image';

export default function Author({ author }) {
  return (
	<div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-90'>
		<div className='absolute left-0 right-0 -top-14'>
			<Image
				src={author.photo.url} 
				alt={author.name} 
				height='100'
				width='100'
				className='mx-auto rounded-full'	
			/>
		</div>
		<h3 className='text-black my-4 text-xl font-bold'>{author.name}</h3>
		<p className='text-white text-lg font-bold text-green-800'>{author.bio}</p>
	</div>
  );
}
