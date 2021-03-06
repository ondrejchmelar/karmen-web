/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey } from "ptz-i18n"
import {
  IntlProvider,
  FormattedMessage,
  defineMessages,
  useIntl,
} from "react-intl"
import CookieConsent from "react-cookie-consent"
import "intl"

import Sitenav from "components/sitenav"
import Footer from "components/footer"
import GitterLink from "components/gitter-link"
import SubscriptionBox from "components/subscription-box"
// import IEWarning from "../legacy/ie-warning"

import BlankLayout from "./blank"

const messages = defineMessages({
  cta: {
    id: "cookieconsent.cta",
    defaultMessage: "Got it!",
  },
})

const CC = () => {
  const intl = useIntl()

  return (
    <CookieConsent
      location="bottom"
      buttonText={intl.formatMessage(messages.cta)}
      cookieName="cookieConsent"
      style={{
        background: "rgba(234, 39, 46, .75)",
        backdropFilter: "saturate(180%) blur(10px)",
        fontSize: ".9rem",
        padding: "1rem",
      }}
      buttonStyle={{
        fontFamily: "'Fira Sans', Helvetica, Arial, sans-serif",
        color: "#fff",
        background: "#000",
        fontSize: "1rem",
        padding: "1rem",
      }}
      contentStyle={{
        maxWidth: "80em",
        textAlign: "center",
        margin: "auto",
      }}
      expires={150}
    >
      <FormattedMessage
        id="cookieconsent.statement"
        defaultMessage="This site uses its own cookies and third-party cookies to gather information on your browsing for statistical purposes. If you continue browsing or fill in the form, we consider that you accept its use and <a>Fragaria Privacy Policy</a>."
        values={{
          a: (...chunks) => (
            <a
              href="/documents/fragaria-privacy-policy.pdf"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              {chunks}
            </a>
          ),
        }}
      />
    </CookieConsent>
  )
}

const Layout = ({ children, location, i18nMessages, containerClass } = {}) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          ...Languages
        }
      }
    }
  `)

  const url = location.pathname
  const { langs, defaultLangKey } = data.site.siteMetadata.languages
  const langKey = getCurrentLangKey(langs, defaultLangKey, url)
  const wrapperClassName = classNames("page-container-wrapper", containerClass)

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <BlankLayout>
        <CC />
        <Sitenav />
        <GitterLink />
        <div className={wrapperClassName}>
          {/* <IEWarning /> */}
          {children}
        </div>
        <SubscriptionBox />
        <Footer location={location} />
      </BlankLayout>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
