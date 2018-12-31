import React from 'react';
import Layout from '../components/Layout.jsx';
import { graphql } from 'gatsby';
import Feed from '../components/Feed';

export default (data) => {
  const { links } = data.data.hql.feed
  return(
  <Layout>
    <Feed links={links} />
  </Layout>
)
}

export const query = graphql`
  query FeedQuery {
    hql {
      feed {
        links {
          id
          description
          url
          votes {
            id
          }
        }
      }
    }
  }
`
