import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, { headers: { authorization: `Bearer ${graphcmsToken}`
  }});
  
  const query = gql`
    mutation CreateComment($name: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;
  
  const result = await graphQLClient.request(query, {
    name: req.body.name,
    comment: req.body.comment,
    slug: req.body.slug,
  });

  return res.status(200).send(result);
}
