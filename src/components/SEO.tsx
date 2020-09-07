import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface PropsItf {
  description?: string;
  keywords?: string[];
  title?: string;
  image?: string;
  url?: string;
  author?: string;
}

const detailQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        url
        image
      }
    }
  }
`;

export const SEO: React.FC<PropsItf> = ({
  description,
  keywords,
  title,
  image,
  url,
  author,
}) => {
  return (
    <StaticQuery
      query={detailQuery}
      render={(data) => {
        const metaDescription: string =
          description || data.site.siteMetadata.description;
        const metaTitle: string = title || data.site.siteMetadata.title;
        const metaAuthor: string = author || data.site.siteMetadata.author;
        const metaUrl: string = url || data.site.siteMetadata.url;
        const metaImage: string = image || data.site.siteMetadata.image;
        const metaKeywords: string[] = keywords || [
          'Gatsby blog',
          'Gatsby MDX blog',
        ];
        return (
          <Helmet
            title={title}
            meta={[
              { name: 'description', content: metaDescription },
              { name: 'og:title', content: metaTitle },
              { name: 'og:type', content: 'website' },
              { name: 'og:image ', content: metaImage },
              { name: 'og:url ', content: metaUrl },
              { name: 'github:user ', content: metaAuthor },
            ].concat({ name: 'keyword', content: metaKeywords.join(',') })}
          />
        );
      }}
    />
  );
};
