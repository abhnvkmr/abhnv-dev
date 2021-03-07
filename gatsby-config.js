module.exports = {
  siteMetadata: {
    title: "Abhinav Kumar",
    description: "Abhinav Kumar's tech blog.",
    author: "@abhnvkmr",
    social: {
      twitter: "@abhnvkmr",
      instagram: "abhnvkmr",
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
