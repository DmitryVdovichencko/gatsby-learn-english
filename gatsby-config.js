module.exports = {
  siteMetadata: {
    title: 'Gatsby Storybook Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dimetrio English',
        short_name: 'Dimetrio English',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#744C9E',
        display: 'standalone',
        icon: 'src/assets/logos/icon.png',
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/`,
        name: 'src',
                       
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    
    {
          resolve:`gatsby-transformer-remark`,
              options: {
              // In your gatsby-transformer-remark plugin array
                plugins: [{
                resolve: 'gatsby-remark-emojis',
                  options: {
                    // Deactivate the plugin globally (default: true)
                    active : true,
                    // Add a custom css class
                    class  : 'emoji-icon',
                    // Select the size (available size: 16, 24, 32, 64)
                    size   : 64,
                    // Add custom styles
                    styles : {
                      display      : 'inline',
                      margin       : '0',
                      'margin-top' : '1px',
                      position     : 'relative',
                      top          : '5px',
                      width        : '25px'
                    }
                  }
                }
              ]}
        },
  ],
};
