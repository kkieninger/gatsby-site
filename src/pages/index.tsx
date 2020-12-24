import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';

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
  const currentJobs = data.currentJobs.nodes;
  const previousJobs = data.previousJobs.nodes;

  return (
    <Layout>
      <SEO title="Home" />
      <section className="bio">
        <p>
          hello, I'm <span className="fc-orange">kevin</span>, a software
          engineer based in metro detroit. I specialize in javascript,
          reactjs, vuejs, nodejs, and graphql. more words will go in this
          paragraph once I figure out what I want to write.
        </p>
      </section>
      <section className="jobs">
        <h2 className="current">current</h2>
        {currentJobs.map((job, index) => <JobListing key={index} {...job} />)}
        <h2 className="previous">previous</h2>
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
