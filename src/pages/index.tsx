import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import { useTheme } from '@emotion/react';

// Types
import { Job } from '../types/jobs';
// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import { JobListing } from '../components/JobListing';


interface DataProps {
  site: {
    siteMetadata: {
      title: string;
    }
  }
  currentJobs: {
    nodes: Job[];
  }
  previousJobs: {
    nodes: Job[];
  }
}

const HomePage: FC<PageProps<DataProps>> = ({ data }) => {
  const theme = useTheme();
  const currentJobs = data.currentJobs.nodes;
  const previousJobs = data.previousJobs.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <section css={{
        margin: `${theme.spacing.xl} auto ${theme.spacing.lg}`,
      }}>
        <p css={{
          fontSize: theme.fonts.size.scale3,
          fontWeight: theme.fonts.weight.bold,
          lineHeight: theme.fonts.lineHeight.normal,
        }}>
          hello, I'm <span css={{ color: theme.colors.orange }}>kevin</span>, a software engineer based
          in metro detroit. I love to build tools for the modern web, and I specialize in lots of
          flavors of javascript, but namely reactjs, vuejs, typescript, nodejs, and graphql.
        </p>
      </section>
      <section>
        <h3 css={{
          marginBottom: theme.spacing.xs,
        }}>current</h3>
        {currentJobs.map((job, index) => <JobListing key={index} {...job} />)}
        <h3 css={{
          marginBottom: theme.spacing.xs,
        }}>previous</h3>
        {previousJobs.map((job, index) => <JobListing key={index} {...job} />)}
      </section>
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    currentJobs: allJobs(filter: {current: {eq: true}}) {
      nodes {
        company
        current
        description
        title
        years
      }
    }
    previousJobs: allJobs(filter: {current: {eq: false}}) {
      nodes {
        company
        current
        description
        title
        years
      }
    }
  }
`
