import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import theme from '../root/theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

import informationCircleSharp from '@iconify/icons-ion/information-circle-sharp';
import pricetagsIcon from '@iconify/icons-ion/pricetags';
import libraryIcon from '@iconify/icons-ion/library';
import logoGithub from '@iconify/icons-ion/logo-github';
import logoTwitter from '@iconify/icons-ion/logo-twitter';
import AvatarImg from '../assets/images/profile.jpeg'
import Drawer from '../components/Drawer/Drawer'
import TextContent from '../components/TextContent/TextContent'

import GlobalStyle from './GlobalStyle';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Helmet>
        <GlobalStyle />
        <MuiThemeProvider theme={theme}>
        <Drawer
              title="Dimetrio English" 
      menuTitle="My English Learning" 
      links={[
          {
            text:'Articles',
            link:'/',
            icon: libraryIcon
          },
        
          {
            text:'Tags',
            icon: pricetagsIcon
          },
            {
            text:'About',
            icon: informationCircleSharp
          }

        ]}
            contacts={[
          {
            link:'https://github.com/DmitryVdovichencko',
            icon: logoGithub,
            tooltip:'My GitHub'
          },
        
          {
            link:'https://twitter.com/Dimetrio89',
            icon: logoTwitter,
            tooltip:'@Dimetrio89'
          },
          

        ]}
        avatar={AvatarImg}>
        <TextContent>
          <div>{children}</div>
          </TextContent>
        </Drawer>
        </MuiThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
