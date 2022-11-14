import React from 'react';
import { useRouter } from 'next/router';
import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto mb-8">
      <div className="md:flex sm:block mx-5 gap-8">
        <div className="">
          <div className="sticky top-24 xl:w-80 lg:w-60">
            <Categories />
          </div>
        </div>
        <div className="lg:w-full mt-2">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);
  return {
    props: { posts }
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

