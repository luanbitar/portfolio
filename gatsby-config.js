module.exports = {
  plugins: [
    `gatsby-env-variables`,
    `gatsby-alias-imports`,
    `gatsby-plugin-offline`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: {
          patterns: [`**/*`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luan Bitar`,
        short_name: `Luan Bitar`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `fullscreen`,
        icon: `static/images/l.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [`${__dirname}/src/styles`],
        data: `@import "${__dirname}/src/styles/internal";`,
      },
    },
  ],
}
