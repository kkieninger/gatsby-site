import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { useTheme } from '@emotion/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage: FC = () => {
  const theme = useTheme();

  return (
    <Layout>
      <SEO title="404: Not Found" />
      <h1>404</h1>
      <h3 css={{ color: theme.colors.orange }}>the page you were looking for doesn&#39;t exist</h3>
      <p>You landed on a page that doesn&#39;t exist... click below to head back to the home page.</p>

      <a href="/">back to home</a>
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
