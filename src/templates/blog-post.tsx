import React, { FC } from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { useTheme } from '@emotion/react';

import { PostData } from '../types';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
  site: {
    siteMetadata: {
      title: string;
    }
  }
  markdownRemark: PostData;
}

const BlogPostTemplate: FC<PageProps<Props>> = ({ data }) => {
  const theme = useTheme();
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
        css={{ textTransform: 'lowercase' }}
      >
        <header css={{
          marginBottom: theme.spacing.xl,
        }}>
          <h1
            itemProp="headline"
            css={{
              marginBottom: theme.spacing.xxs,
            }}
          >{post.frontmatter.title}</h1>
          <p
            css={{
              fontWeight: theme.fonts.weight.bold,
              color: theme.colors.orange,
              fontSize: theme.fonts.size.scale2,
            }}
          >{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      </article>
      <nav css={{
        display: 'flex',
        justifyContent: 'flex-end',
        borderTop: `2px solid ${theme.colors.orange}`,
        padding: `${theme.spacing.sm} 0`,
        marginTop: theme.spacing.lg,
      }}>
        <Link to="/writing">back to writing</Link>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
