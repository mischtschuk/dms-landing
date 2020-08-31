/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import "../../assets/scss/style.scss"
import "typeface-open-sans";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'

import HeaderComponent from "../header/header.component"
import FooterComponent from "../footer/footer.component"
import theme from "../../theme";

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <ThemeProvider theme={createMuiTheme(theme)}>
            <HeaderComponent/>
            <main>{children}</main>
            <FooterComponent/>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
