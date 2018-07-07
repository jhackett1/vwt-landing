var config = require('./src/pages/config.js')

console.log(config)

module.exports = {
  siteMetadata: {
    title: config.title,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          config.fonts
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.trackingId,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: config.faviconPath,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          firefox: true,
        }
      }
    }
  ],
}
