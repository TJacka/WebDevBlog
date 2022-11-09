import moment from 'moment';
import React from 'react';
import Image from 'next/image'

export default function PostDetail({ post }) {
  
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <div key={i}>{item}</div>)}</h3>;
      case 'paragraph':
        return <div key={index} className="mb-8">{modifiedText.map((item, i) => <div key={i}>{item}</div>)}</div>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <div key={i}>{item}</div>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width="auto"
			objectFit="cover"
            src={obj.src}
          />
        );
      default:
        return modifiedText;
		}
	};

	return (
		<div className='bg-white rounded-lg pb-4 mb-8'>
			<div className='relative overflow-hidden mb-6 rounded-t-md shadow-inner shadow-white'>
				<img 
					src={post.featuredImage.url} 
					alt={post.title}
					className='object-top'
					objectFit="cover"
					width='auto'
				/>
			</div>
			<div className='px-4 lg:px-8'>
				<div className='flex justify-between items-center mb-2 w-full'>
					<div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
						<Image 
						alt={post.author.name} 
						height='30'
						width='30'
						className='align-middle rounded-full'
						src={post.author.photo.url}  
						/>
						<p className='inline align-middle text-gray-700 ml-2 mr-6 pt-1'>{post.author.name}</p>
					</div>
					<div className="font-medium text-gray-700 pt-2">
						<span>
							{moment(post.createdAt).format('MMM DD, YYYY')}
						</span>
					</div>
				</div>
				<h1 className='mb-8 text-4xl font-bold text-center'>{post.title}</h1>
				{post.content.raw.children.map((typeObj, index) => {
					const children = typeObj.children.map((item, itemIndex) => getContentFragment(itemIndex, item.text, item));
					return getContentFragment(index, children, typeObj, typeObj.type);
				})}
			</div>
		</div>	
  	);
};
