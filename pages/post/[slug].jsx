import React from 'react';
import { useRouter } from 'next/router';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
      <div className="container mx-auto">
        <div className="lg:flex gap-6 mx-5">
          <div className=''>
            <div className="relative lg:sticky w-80 top-24 xl:w-60 lg:w-40 xs:hidden sm:hidden md:hidden lg:flex">
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
            </div>
          </div>
          <div className="relative pt-2">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="">
            <div className="relative lg:sticky top-24 w-80 xl:w-60 lg:w-40 xs:hidden sm:hidden md:hidden lg:flex">
              <Categories />
            </div>
          </div>
        </div>
      </div>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}