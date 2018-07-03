import React from 'react'

import Header from '../components/header'
import Hero from '../components/hero'
import Logos from '../components/logos'
import Explanation from '../components/explanation'
import SellingPoints from '../components/selling-points'
import SellingPointsAlt from '../components/selling-points-alt'
import Tabs from '../components/tabs'

const IndexPage = ({data}) => (
  <div>
    <Header
      ctaLink="#"
      ctaText="Buy tokens"
    />
    <Hero
      headline={data.site.siteMetadata.title}
      strapline="Varius World Tech ICO"
      mainCtaLink="#"
      mainCtaText="Buy tokens"
      secondaryCtaLink="#"
      secondaryCtaText="Whitepaper"
    />
    <Logos
      logos={['myLogo.png', 'myLogo.png', 'myLogo.png', 'myLogo.png', 'myLogo.png', 'myLogo.png']}
    />
    <Explanation
      chapterTitle="The opportunity"
      headline="Tapping into the $51.4BN online gaming industry with Blockchain Technology."
      body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem. Aut voluptatem corporis placeat veritatis autem consequuntur architecto. Expedita natus ratione praesentium."
      mainCtaLink="#"
      mainCtaText="Buy tokens"
      secondaryCtaLink="#"
      secondaryCtaText="Read our whitepaper"
    />
    <SellingPoints
      chapterTitle="Innovation"
      headline="Our bespoke protocol is specifically built to serve the needs of the on-chain gambling industry."
      point1Heading="High speed transactions"
      point1Body="Et voluptatem quaerat nam voluptatem."
      point2Heading="Low fees"
      point2Body="Iure ducimus odit neque."
      point3Heading="Provably fair"
      point3Body="Expedita natus ratione praesentium."
    />
    <SellingPointsAlt
      chapterTitle="Benefits"
      headline="Designed to benefit players, developers and governments."
      point1Heading="Players"
      point1Body="Et voluptatem quaerat nam voluptatem. Et nam voluptatem."
      point2Heading="Developers"
      point2Body="Iure ducimus odit neque. Et voluptatem quaerat nam voluptatem."
      point3Heading="Governments"
      point3Body="Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem."
    />
    <Tabs
      headline="Token Sale Information"
      body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem."
      tabNames={["Private sale", "Pre sale", "Public sale"]}
      tabDescriptions={[
        "Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem.",
        "Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem.",
        "Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem."
      ]}
      tabContent={[
        {
          "From": "01 Sept 2018",
          "To": "01 Oct 2018",
          "Bonus/Discount Rate": "30%",
          "Token Price": "1.00",
          "Minimum Contribution": "£10K",
          "Maximum Contribution": "£1M"
        }
      ]}
    />

  </div>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
