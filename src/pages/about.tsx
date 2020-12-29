import React, { FC } from 'react';
import { graphql, PageProps } from 'gatsby';
import Image from 'gatsby-image';
import { useTheme } from '@emotion/react';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface DataProps {
  photo: {
    childImageSharp: {
      fixed: {
        base64: string;
        width: number;
        height: number;
        src: string;
        srcSet: string;
      }
    }
  }
}

const AboutPage: FC<PageProps<DataProps>> = ({ data }) => {
  const theme = useTheme();
  const photo = data.photo.childImageSharp.fixed;

  return (
    <Layout>
      <SEO title="About" />
      <main>
        <h1>about</h1>
        <p>hi, i'm kevin.</p>
        <p>
          outside of work, i love. i'm a whiskey aficionado, an amateur mixologist and cocktail enthusiast.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et pulvinar est. Etiam sodales, odio eu blandit cursus, felis nisi tristique lorem, non laoreet orci nunc in diam. Donec nec iaculis orci. Praesent a mauris a turpis porta vehicula. Cras laoreet efficitur velit, quis ultrices urna faucibus ac. Donec leo nibh, feugiat id ipsum fermentum, consequat tristique ante. Sed mollis nunc nisl. Mauris vel condimentum est, vitae scelerisque tortor. Nullam vel lorem diam. Etiam urna lorem, vulputate vel turpis sed, auctor elementum arcu. Proin vel diam iaculis, consectetur massa sed, pellentesque ex.
        </p>
        {photo && (
          <div css={{
            margin: `${theme.spacing.lg} 0`,
            textAlign: 'center'
          }}>
            <Image
              fixed={photo}
              alt="Kevin Profile Picture"
            />
          </div>
        )}
        <h2 css={{ fontSize: theme.fonts.size.scale3 }}>expertise</h2>
        <p>I'm a full stack software engineer.</p>
        <p>
          Phasellus blandit erat et nisl dictum, ut aliquam nibh feugiat. Pellentesque orci mi, eleifend sit amet lacinia et, luctus a nulla. Duis sed blandit est, in tristique urna. Quisque blandit sed velit non pellentesque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc molestie elit nec euismod aliquam. Nunc ac felis commodo, ullamcorper nisl in, faucibus orci. Aenean sit amet sagittis lectus, sit amet fringilla metus.
        </p>
        <p>
          Curabitur suscipit augue vel tempus sodales. Maecenas varius ex eu arcu interdum consectetur. Duis ac est non enim elementum bibendum a nec felis. Duis magna orci, tempor a vestibulum eget, aliquam a elit. Aenean ante metus, ultrices sed est et, pretium luctus odio. Duis lacinia hendrerit purus, et suscipit elit tincidunt a. Vivamus nec urna gravida, convallis justo id, elementum nisi. Nunc euismod egestas ex. Curabitur ut magna arcu. Vivamus leo lorem, sodales at odio ut, auctor pellentesque odio. Quisque eu ex rutrum augue consectetur pulvinar. Phasellus scelerisque ligula nibh, ut dapibus eros convallis et. Sed tincidunt metus odio, eget consectetur dui luctus vel. Aenean rhoncus vulputate posuere. Nullam pellentesque nibh quis urna rutrum hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          <strong>this site</strong> was built using gatsby, react, typescript, and emotion. the blogs are written with simple markdown files, and the whole thing
          is deployed via netlify. you can find the full source code <a href="https://github.com/kkieninger/gatsby-site" target="_blank">here</a>, or you can
          build your own with this <a href="https://github.com/kkieninger/gatsby-typescript-blog-starter" target="_blank">template</a>, which is an extension of the
          <a href="https://github.com/gatsbyjs/gatsby-starter-blog" target="_blank">fantastic gatsby starter</a>, with a few of my own preferences baked in.
          if you have any questions or if you find any problems, please feel free to open up an issue on github.
        </p>
        <h2 css={{ fontSize: theme.fonts.size.scale3 }}>contact</h2>
        <p>
          i'm not much for social media these days, but i try my best to monitor my handles below. if you have a project you want to work on together, or just want to chat, i'd love to hear from you.</p>
        <p>
          email: <a href="mailto:ktkienin@gmail.com">ktkienin@gmail.com</a>
        </p>
      </main>
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    photo: file(absolutePath: { regex: "/kev.png/" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
