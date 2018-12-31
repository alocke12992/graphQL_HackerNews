import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';
import Feed from '../components/Feed.jsx';

const Index = (data) => {
  const { links } = data.data.hql.feed;
  return (
  <Layout>
    <Feed links={links} />
  </Layout>
  );
};

export default Index;
export const query = graphql`
  query FeedQuery {
    hql {
      feed {
        links {
          id
          description
          url
          postedBy {
            name
          }
          votes {
            id
          }
        }
      }
    }
  }
`;
