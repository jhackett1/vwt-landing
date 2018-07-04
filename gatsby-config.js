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
          `Roboto\:100,300,400,700,900`
        ]
      }
    }
  ],
}
