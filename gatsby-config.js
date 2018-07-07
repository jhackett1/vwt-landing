// ======================================
// GATSBY-CONFIG.JS
// Change site title, Google Web Fonts,
// favicon and GA tracking ID here
// ======================================


module.exports = {
  siteMetadata: {
    title: "The future of online gaming",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,300,400,700,900`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/logo-small.svg',
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
