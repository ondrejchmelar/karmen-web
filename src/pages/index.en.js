import React from "react"
import { graphql } from "gatsby"

import Layout from "layouts/en"

import SEOMetadata from "components/seo/metadata"
import SEOBusinessInfo from "components/seo/business-info"
import CasesBlock from "components/page-blocks/cases"
import HeroBlock from "components/page-blocks/hero"
import PricingBlock from "components/page-blocks/pricing"
import PrincipleBlock from "components/page-blocks/principle"
import TestimonialsBlock from "components/page-blocks/testimonials"
import SolutionBlock from "components/page-blocks/solution"
import StoryBlock from "components/page-blocks/story"

const IndexENPage = ({ data, location }) => {
  return (
    <Layout location={location} containerClass="v-home">
      <SEOMetadata title="Welcome" />
      <SEOBusinessInfo />

      <HeroBlock className="v-home-hero v-home-section" />
      <SolutionBlock className="v-home-solution v-home-section" />

      <div className="content-block content-block--sitenavwide">
        <CasesBlock className="v-home-cases v-home-section" />
        <PrincipleBlock className="v-home-principle v-home-section" />
      </div>

      <div className="content-block">
        <PricingBlock location={location} className="v-home-pricing v-home-section" />
        <TestimonialsBlock className="v-home-testimonials v-home-section" />
      </div>

      <div className="content-block content-block--sitenavwide">
        <StoryBlock className="v-home-story v-home-section" />
      </div>
    </Layout>
  )
}

export default IndexENPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        company {
          contactEmail
          social {
            twitter
            github
          }
        }
      }
    }
  }
`
