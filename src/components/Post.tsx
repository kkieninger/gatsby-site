import React, { FC } from 'react';
import { Link } from 'gatsby';
import { useTheme } from '@emotion/react';
import { PostData } from '../types';

const Post: FC<PostData> = (props) => {
  const theme = useTheme();

  return (
    <article
      className="post-list-item"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h2 css={{
          marginBottom: theme.spacing.xxs,
          fontSize: theme.fonts.size.scale3,
        }}>
          <Link
            to={props.fields.slug}
            itemProp="url"
            css={{ textTransform: 'lowercase' }}
          >
            <span itemProp="headline">{props.frontmatter.title}</span>
          </Link>
        </h2>
        <span css={{
          display: 'block',
          fontWeight: theme.fonts.weight.bold,
          marginBottom: theme.spacing.xxs,
        }}>{props.frontmatter.date}</span>
      </header>
      <section>
        <p
          css={{
            fontWeight: theme.fonts.weight.normal,
            textTransform: 'lowercase',
          }}
          dangerouslySetInnerHTML={{
            __html: props.frontmatter.description || props.excerpt,
          }}
          itemProp="description"
        />
      </section>
    </article>
  );
};

export default Post;