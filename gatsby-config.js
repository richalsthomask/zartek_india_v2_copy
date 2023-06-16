const path = require(`path`);

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
    FAST_DEV: true,
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: false,
    FUNCTIONS: false,
  },
  siteMetadata: {
    title: "Zartek",
    description:
      "Zartek is a leading website and app development company in India with experience in native and hybrid development. We have experienced mobile application developers in Android, iOS and Hybrid platforms.",
    author: "Zartek",
    siteUrl: "https://www.zartek.in",
    url: "https://www.zartek.in",
    image:
      "https://images.ctfassets.net/xhs8vi1fxo4s/2gXyFCk3mJWWg5UPmLTbYn/b2f02f1e428080d95ea522e16bc3de03/logo.png?w=800&q=50",
    twitterUsername: "@zartekq",
    developedBy: "Zartek Technologies",
    keyWords: [
      "zartek",
      "mobile app",
      "startups in kerala",
      "flutter application development",
      "mobile app developers",
      "app development",
      "mobile app developement cochin",
      "mobile app developement kochi",
      "mobile app developement india",
      "android app developement cochin",
      "android app developement kochi",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136221120-1",
        head: true,
        anonymize: true,
        defer: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TQWVNCG",
        // id: "G-SJKXY5ZTW6",
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.zartek.in`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "https://www.zartek.in/sitemap.xml",
        policy: [{ userAgent: "*", Disallow: "/404" }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zartek India`,
        short_name: `Zartek India`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-brotli",
      options: {
        extensions: ["css", "html", "js", "svg", "ts"],
      },
    },
  ],
};
