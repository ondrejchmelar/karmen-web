/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import "src/styles/global.scss"
import "src/smoothscroll.js"

// Load i18n graphql fragment
import { querying } from "src/i18n/querying" // eslint-disable-line

/**
 * Automatically redirect to /en if lang prefix is missing
 */
export const onClientEntry = () => {
  const hasLangPrefix =
    window.location.pathname.startsWith("/en") ||
    window.location.pathname.startsWith("/cs")

  if (!hasLangPrefix) {
    window.location.pathname = `/en${window.location.pathname}`
  }
}
