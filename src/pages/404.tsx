import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const NotFoundPage: FC<PageProps<DataProps>> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>{siteTitle}</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
