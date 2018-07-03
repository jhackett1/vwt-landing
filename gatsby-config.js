module.exports = {
  siteMetadata: {
    title: 'The Future of Online Gaming',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto` // you can also specify font weights and styles
        ]
      }
    }
  ],
}
