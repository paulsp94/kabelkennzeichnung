/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/kabelkennzeichnung",
  siteMetadata: {
    title: `Langlebige Kabelkennzeichnung – PVC-Kabelkennzeichnungsbänder für sicherheitsrelevante Bereiche`,
    description: `Entdecken Sie unsere langlebigen und witterungsbeständigen PVC-Kabelkennzeichnungsbänder, ideal für sicherheitsrelevante Bereiche wie Kraftwerkbau. Individuelle Beschriftungen möglich.`,
    keywords: `Kabelkennzeichnung, PVC-Kabelkennzeichnungsbänder, witterungsbeständig, UV-beständig, Montageanleitung, Preisanfrage, sicherheitsrelevante Bereiche`,
    siteUrl: `https://paulspen.de/kabelkennzeichnung/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    //, "gatsby-plugin-google-gtag"
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
