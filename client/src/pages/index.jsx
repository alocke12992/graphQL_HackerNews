import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';
import Feed from '../components/Feed.jsx';

export default (data) => {
  const { links } = data.data.hql.feed
  return (
  <Layout>
    <Feed links={links} />
  </Layout>
  );
};
export const query = graphql`
  query FeedQuery {
    hql {
    feed {
      links {
        id
        voteCount
        description
        url
        postedBy {
          id
          name
        }
      }
    }
  }
  }
`;
