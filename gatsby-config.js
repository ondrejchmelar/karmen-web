const path = require("path")
const languages = require("./src/i18n/languages")

module.exports = {
  siteMetadata: {
    author: `Fragaria s.r.o.`,
    title: "Karmen",
    email: "karmen@fragaria.cz",
    description:
      "Open-source solution for multi-printer management. It allows one to control a bunch of printers remotely, features an efficient management of print queues and offers smooth and user-friendly web interface.",
    keywords: [
      "software",
      "software development",
      "web apps",
      "vývoj software",
      "webové aplikace",
      "python",
      "javascript",
      "react",
      "html",
      "css",
    ],
    siteUrl: process.env.SITE_URL || "https://karmen.tech", // no trailing slash!
    languages,
    checkout: {
      enabled: (process.env.CHECKOUT_ENABLED || "1") === "1",
      octobatConfigured: !!process.env.OCTOBAT_API_KEY,
      octobatApiKey: process.env.OCTOBAT_API_KEY || "???",
      octobatBeanieConfigurationId:
        process.env.OCTOBAT_BEANIE_CONFIGURATION_ID ||
        "oc_beanie_cc_15861720512wyfd43d44f5",
    },
    company: {
      websiteTitle: "Karmen",
      officialName: "Fragaria s.r.o.",
      phone: "+420 222 581 311",
      contactEmail: "info@karmen.tech",
      ico: "48590151",
      dic: "CZ48590151",
      accountNr: "2700620429/2010",
      listedAt: "Spisová značka: C 18340 vedená u Městského soudu v Praze",
      address: {
        residence: {
          line1: "Ječná 507/6",
          line2: "120 00 Praha 2",
          line3: "Czech Republic",
          mapLink:
            "https://www.google.com/maps/place/Fragaria+s.r.o./@50.0754397,14.420427,17z/data=!4m13!1m7!3m6!1s0x470b94f4a0a239d7:0xb2eea226236a6892!2zSmXEjW7DoSA1MDcvNiwgMTIwIDAwIE5vdsOpIE3Em3N0bw!3b1!8m2!3d50.0754363!4d14.4226157!3m4!1s0x470b94f4a0a6806f:0x4cd2eac776b26943!8m2!3d50.07548!4d14.42264",
        },
        billing: {
          line1: "Pampelišková 2013/8",
          line2: "106 00 Praha 10",
          line3: "Czech Republic",
        },
      },
      social: {
        twitter: "Karmen3D",
        github: "fragaria/karmen",
        youtube: "UC9kcYa3r0x4MLR47i1flnFw",
        readthedocs: "karmen",
        facebook: "karmen3D",
        gitter: "fragaria/karmen",
      },
    },
    pillDocs: "https://docs.karmen.tech/#/pill-getting-started",
    karmenDocs: "https://docs.karmen.tech/#/quickstart",
    clients: [
      {
        title: "3darena",
        img: "/portfolio/3darena-logo.png",
        href: "https://3darena.cz/",
      },
      {
        title: "cwrkjzd",
        img: "/portfolio/cwrkjzd-logo.png",
        href: "https://www.cwrkjzd.cz/",
      },
      {
        title: "3D print na FIT ČVUT",
        img: "/portfolio/cvut-logo.png",
        href: "https://3dprint.fit.cvut.cz/",
      },
      {
        title: "anyonego",
        img: "/portfolio/anyonego-logo.png",
        href: "https://anyonego.com",
      },
      {
        title: "FIT",
        img: "/portfolio/fit-cvut-logo.svg",
        href: "https://fit.cvut.cz/",
      },
      { title: "GJK", img: "/portfolio/gjk-logo.png", href: "https://gjk.cz/" },
      {
        title: "IKEM",
        img: "/portfolio/ikem-logo.png",
        href: "https://www.ikem.cz/",
      },
      {
        title: "Třeběšín",
        img: "/portfolio/trebesin-logo.png",
        href: "https://www.trebesin.cz/",
      },
    ],
    nav: {
      en: [
        { name: "How it works", url: `/en/#principle` },
        { name: "Pricing", url: `/en/#buy` },
        { name: "Buy", url: `/en/buy/` },
        { name: "Karmen story", url: `/en/story/` },
      ],
      cs: [
        { name: "Jak na to", url: `/cs/#principle` },
        { name: "Cena", url: `/cs/#buy` },
        { name: "Koupit", url: `/cs/koupit/` },
        { name: "Příběh Karmen", url: `/cs/pribeh/` },
      ],
    },
    footerNav: {
      en: [
        [
          { name: "Sign up", url: "https://cloud.karmen.tech/register" },
          { name: "Log in", url: "https://cloud.karmen.tech" },
        ],
        [
          { name: "Karmen docs", url: "https://docs.karmen.tech/#/quickstart" },
          {
            name: "Karmen Pill docs",
            url: "https://docs.karmen.tech/#/pill-getting-started",
          },
        ],
        [
          {
            name: "Source code on GitHub",
            url: "https://github.com/fragaria/karmen",
          },
          {
            name: "Releases",
            url: "https://github.com/fragaria/karmen/releases",
          },
        ],
      ],
      cs: [
        [
          {
            name: "Zaregistrovat se",
            url: "https://cloud.karmen.tech/register",
          },
          { name: "Přihlásit se", url: "https://cloud.karmen.tech" },
        ],
        [
          {
            name: "Karmen dokumentace",
            url: "https://docs.karmen.tech/#/quickstart",
          },
          {
            name: "Karmen Pill dokumentace",
            url: "https://docs.karmen.tech/#/pill-getting-started",
          },
        ],
        [
          {
            name: "Zdrojový kód na GitHubu",
            url: "https://github.com/fragaria/karmen",
          },
          {
            name: "Releasy",
            url: "https://github.com/fragaria/karmen/releases",
          },
        ],
      ],
    },
  },
  plugins: [
    /**
     * Adds SASS support.
     */
    {
      resolve: "gatsby-plugin-sass",
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    /**
     * Allows modifications of <head> tags from any component
     */
    `gatsby-plugin-react-helmet`,
    /**
     * Adds aliases for src/pages/assets directories.
     * e.g. import someImage from 'assets/img/myimage.png'
     */
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        layouts: path.join(__dirname, "src/layouts"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        translations: path.join(__dirname, "src/i18n/translations"),
      },
    },
    /**
     * Filesystem source for gatsby transformers.
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "assets", "img"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * Creates website manifest (favicons etc.)
     */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karmen`,
        short_name: `Karmen`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ea272e`,
        display: `minimal-ui`,
        icon: `src/assets/img/karmen-logo-rect.svg`, // This path is relative to the root of the site.
      },
    },
    /**
     * Adds GA tracking script.
     * Will ONLY be appended when running gatsby build.
     */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-9784905-23",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        prefixDefault: true,
      },
    },
    /**
     * Load Octobat Beanie checkout script
     */
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        disable: !process.env.OCTOBAT_API_KEY,
        src:
          "https://cdn.jsdelivr.net/gh/0ctobat/octobat-beanie.js@latest/dist/octobat-beanie.min.js",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // Make specific links smooth-scrollable
    {
      resolve: "gatsby-plugin-anchor-links",
    },
    // Generate sitemap in production mode
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/cs/platba-zrusena/", "/en/payment-cancelled/"],
      },
    },
  ],
}
