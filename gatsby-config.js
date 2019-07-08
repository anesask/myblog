const config = require('./site-config')

module.exports = {
  siteMetadata: {
    title: 'Anes Mulalic | Web Development',
    author: 'Anes Mulalic'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 590,
        }
        },  
        {
          resolve: `gatsby-remark-embed-video`,
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true //Optional: Disable insertion of <style> border: 0
          },
        }
        ]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,     
    `gatsby-image`, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,        
        path: `${__dirname}/src/images/`        
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {        
        path: `${__dirname}/src/posts/`,
        name: `posts`
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Lato', 'Raleway']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID
      }
    },  
      
    `gatsby-remark-responsive-iframe`,      
    `gatsby-plugin-react-helmet`,
    // // {
    // //   resolve: `gatsby-plugin-manifest`,
    // //   options: {
    // //     name: 'gatsby-starter-default',
    // //     short_name: 'starter',
    // //     start_url: '/',
    // //     background_color: '#663399',
    // //     theme_color: '#663399',
    // //     display: 'minimal-ui',
    // //     icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    // //   },
    // },
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    
  ],
}
