const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `Fragaria s.r.o.`,
    title: 'Karmen',
    email: 'karmen@fragaria.cz',
    description: 'Open-source solution for multi-printer management. It allows one to control a bunch of printers remotely, features an efficient management of print queues and offers smooth and user-friendly web interface.',
    keywords: ['software', 'software development', 'web apps', 'vývoj software', 'webové aplikace', 'python', 'javascript', 'react', 'html', 'css'],
    siteUrl: 'https://karmen.tech', // no trailing slash!
    company: {
      websiteTitle: 'karmen.tech',
      officialName: 'Fragaria s.r.o.',
      phone: '+420 222 581 311',
      contactEmail: 'karmen@fragaria.cz',
      ico: '48590151',
      dic: 'CZ48590151',
      accountNr: '2700620429/2010',
      listedAt: 'Spisová značka: C 18340 vedená u Městského soudu v Praze',
      address: {
        residence: {
          line1: 'Ječná 507/6',
          line2: '120 00 Praha 2',
          line3: 'Czech Republic',
          mapLink: 'https://www.google.com/maps/place/Fragaria+s.r.o./@50.0754397,14.420427,17z/data=!4m13!1m7!3m6!1s0x470b94f4a0a239d7:0xb2eea226236a6892!2zSmXEjW7DoSA1MDcvNiwgMTIwIDAwIE5vdsOpIE3Em3N0bw!3b1!8m2!3d50.0754363!4d14.4226157!3m4!1s0x470b94f4a0a6806f:0x4cd2eac776b26943!8m2!3d50.07548!4d14.42264'
        },
        billing: {
          line1: 'Pampelišková 2013/8',
          line2: '106 00 Praha 10',
          line3: 'Czech Republic',
        }
      },
      social: {
        twitter: 'Karmen3D',
        github: 'fragaria/karmen',
        youtube: 'UC9kcYa3r0x4MLR47i1flnFw',
        readthedocs: 'karmen',
        facebook: 'karmen3D',
      }
    },
    clients: [
      {title: '3darena', img: '/portfolio/3darena-logo.png'},
      {title: 'cwrkjzd', img: '/portfolio/cwrkjzd-logo.png'},
      {title: 'ČVUT', img: '/portfolio/cvut-logo.png'},
      {title: 'anyonego', img: '/portfolio/anyonego-logo.png'},
      {title: 'FIT', img: '/portfolio/fit-cvut-logo.svg'},
      {title: 'GJK', img: '/portfolio/gjk-logo.png'},
      {title: 'IKEM', img: '/portfolio/ikem-logo.png'},
      {title: 'Třeběšín', img: '/portfolio/trebesin-logo.png'}
    ],
    nav: {
      en: [
        {name: 'Products and Services', url: '/en/#products'},
        {name: 'Where to buy', url: `/en/#buy`},
        {name: 'Testimonials', url: `/#portfolio`},
      ],
      cs: [
        {name: 'Produkty a služby', url: '/#products'},
        {name: 'Kde koupit', url: `/#buy`},
        {name: 'Beta testování', url: `/#beta`},
        {name: 'Reference', url: `/#portfolio`},
      ]
    }
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        useResolveUrlLoader: {
          options: {
            sourceMap: true, //default is false
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `karmen.tech`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ea272e`,
        display: `minimal-ui`,
        icon: `src/assets/img/karmen-logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-9784905-23",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}