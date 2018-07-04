import React from 'react'

// Blocks we will use
import Header from '../blocks/header'
import Hero from '../blocks/hero'
import Logos from '../blocks/logos'
import Explanation from '../blocks/explanation'
import SellingPoints from '../blocks/selling-points'
import SellingPointsAlt from '../blocks/selling-points-alt'
import Tabs from '../blocks/tabs'

// Static assets
import logo from '../../static/logo.svg'
import logoDark from '../../static/logo-blue.svg'
import logoSmall from '../../static/logo-small.svg'

// The page layout
const IndexPage = ({data}) => (
  <div>

    <Header
      ctaLink="#"
      ctaText="Buy tokens"
      logo={logoDark}
      menuText={[
        'Sale details', 'Benefits', 'FAQ',
      ]}
      menuLinks={[
        '#', '#', '#'
      ]}
      />

    <Hero
      headline="The Future of Online Gaming"
      strapline="Varius World Tech ICO"
      mainCtaLink="#"
      mainCtaText="Buy tokens"
      secondaryCtaLink="#"
      secondaryCtaText="Whitepaper"
      />

    <Logos
      logos={['logo1.jpg', 'logo2.jpg', 'logo3.jpg', 'logo4.jpg', 'logo5.jpg', 'logo6.jpg']}
      />

    <Explanation
      chapterTitle="The opportunity"
      image="/counters.png"
      imageAlt="Counters"
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
      icon={logoSmall}
      headline="Token Sale Information"
      body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem."
      tabNames={["Private sale", "Pre sale", "Public sale"]}
      tabDescriptions={[
        "Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem.",
        "Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem.",
        "Expedita natus ratione praesentium. Et voluptatem quaerat nam voluptatem."
      ]}
      tabContentLabels={[
        "From",
        "To",
        "Bonus/Discount Rate",
        "Token Price",
        "Minimum Contribution",
        "Maximum Contribution"
      ]}
      tabContent={[
        [ "01 Sept 2018", "01 Oct 2018", "30%", "1.00", "£10K", "£1M" ],
        [ "01 Sept 2019", "01 Oct 2019", "30%", "1.00", "£10K", "£1M" ],
        [ "01 Sept 2020", "01 Oct 2020", "30%", "1.00", "£10K", "£1M" ],
      ]}
      mainCtaLink="#"
      mainCtaText="Apply for whitelist"
      secondaryCtaLink="#"
      secondaryCtaText="Set reminder"
      />

  </div>
)

export default IndexPage
