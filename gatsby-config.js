/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `logzka.hls.dance`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
  // "gatsby-plugin-google-gtag",
  {
    resolve: `@nathanpate/gatsby-omni-font-loader`,
    options: {
      mode: 'async',
      enableListener: true,
      web: [
        {
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
        },
      ],
    },
  },
  "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};