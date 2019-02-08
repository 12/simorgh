import React from 'react';
import Helmet from 'react-helmet';
import { arrayOf, string, number } from 'prop-types';

const Metadata = ({
  articleAuthor,
  articleSection,
  brandName,
  canonicalLink,
  defaultImage,
  defaultImageAltText,
  description,
  facebookAdmin,
  facebookAppID,
  locale,
  metaTags,
  timeFirstPublished,
  timeLastPublished,
  title,
  twitterCreator,
  twitterSite,
  type,
}) => (
  <Helmet>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1"
    />
    <title>
      {title} - {brandName}
    </title>
    <link rel="canonical" href={canonicalLink} />
    <meta name="article:author" content={articleAuthor} />
    <meta name="article:modified_time" content={timeLastPublished} />
    <meta name="article:published_time" content={timeFirstPublished} />
    {articleSection ? (
      <meta name="article:section" content={articleSection} />
    ) : null}
    {metaTags.map(tag => (
      <meta name="article:tag" content={tag} key={tag} />
    ))}
    <meta name="description" content={description} />
    <meta name="fb:admins" content={facebookAdmin} />
    <meta name="fb:app_id" content={facebookAppID} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content={defaultImage} />
    <meta name="og:image:alt" content={defaultImageAltText} />
    <meta name="og:locale" content={locale} />
    <meta name="og:site_name" content={brandName} />
    <meta name="og:title" content={title} />
    <meta name="og:type" content={type} />
    <meta name="og:url" content={canonicalLink} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitterCreator} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image:alt" content={defaultImageAltText} />
    <meta name="twitter:image:src" content={defaultImage} />
    <meta name="twitter:site" content={twitterSite} />
    <meta name="twitter:title" content={title} />
  </Helmet>
);

Metadata.propTypes = {
  articleAuthor: string.isRequired,
  articleSection: string,
  brandName: string.isRequired,
  canonicalLink: string.isRequired,
  defaultImage: string.isRequired,
  defaultImageAltText: string.isRequired,
  description: string.isRequired,
  facebookAdmin: number.isRequired,
  facebookAppID: number.isRequired,
  locale: string.isRequired,
  metaTags: arrayOf(string).isRequired,
  timeFirstPublished: string.isRequired,
  timeLastPublished: string.isRequired,
  title: string.isRequired,
  twitterCreator: string.isRequired,
  twitterSite: string.isRequired,
  type: string.isRequired,
};

Metadata.defaultProps = {
  articleSection: null,
};

export default Metadata;
