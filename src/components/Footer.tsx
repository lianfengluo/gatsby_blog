import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FooterWrapper,
  FooterSocialIcons,
  FooterSocialWrapper,
  P,
} from 'src/wrappers';

export const Footer: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      portfolio: file(relativePath: { eq: "portfolio.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.facebook.com/profile.php?id=100002046087236"
            target="_blank"
            rel="noreferrer noreopener"
          >
            <img src={data.facebook.publicURL} alt="facebook icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/richard-luo-849a87103/"
            target="_blank"
            rel="noreferrer noreopener"
          >
            <img src={data.linkedin.publicURL} alt="linkedin icon" />
          </a>
          <a
            href="https://github.com/lianfengluo"
            target="_blank"
            rel="noreferrer noreopener"
          >
            <img src={data.github.publicURL} alt="github icon" />
          </a>
          <a
            href="https://lianfengluo.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.portfolio.publicURL} alt="portfolio icon" />
          </a>
        </FooterSocialIcons>
        <P size="s" color="dark3">
          © 2020 Richard{'  '}
          👋🏼👋🏼👋🏼👋🏼
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  );
};
