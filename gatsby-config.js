/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-styled-components`,
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Add any options here
      },
    },
  ],
}