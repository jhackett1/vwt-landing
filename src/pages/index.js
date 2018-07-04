import React from 'react'

// Blocks we will use
import Header from '../blocks/header'
import Hero from '../blocks/hero'
import Logos from '../blocks/logos'
import Explanation from '../blocks/explanation'
import SellingPoints from '../blocks/selling-points'
import SellingPointsAlt from '../blocks/selling-points-alt'
import Tabs from '../blocks/tabs'
import Graphics from '../blocks/graphics'
import Team from '../blocks/team'
import Events from '../blocks/events'
import Roadmap from '../blocks/roadmap'
import Products from '../blocks/products'
import SignUp from '../blocks/sign-up'

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

    <Graphics
      headline="Token Distribution"
      body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem."
      chart1Title="Distribution"
      chart1Data={{
        labels: ['Token sale', 'Advisors', 'Community building', 'Foundation', 'Team and angel'],
        series: [26, 10, 15, 29, 20]
      }}
      chart1Options={{
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 0,
        showLabel: false
      }}
      chart1Type="Pie"
      chart2Title="Funds allocation"
      chart2Data={{
        labels: ['Token sale', 'Advisors', 'Community building', 'Foundation', 'Team and angel'],
        series: [26, 10, 15, 29, 20]
      }}
      chart2Options={{
        donut: true,
        donutWidth: 60,
        donutSolid: true,
        startAngle: 0,
        showLabel: false
      }}
      chart2Type="Pie"
      />

    <Team
      chapterTitle="Team"
      headline="Meet the team behind VWT"
      teamMembers={{
        images: ["http://placehold.it/80x80", "http://placehold.it/80x80", "http://placehold.it/80x80", "http://placehold.it/80x80"],
        names: ["Name Surname", "Name Surname", "Name Surname", "Name Surname"],
        titles: ["Role title", "Role title", "Role title", "Role title"],
        bios: [
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt"
        ],
        twitters: ["#", null, null, "#"],
        linkedins: ["#", null, "#", "#"]
      }}
      />

    <Events
      chapterTitle="Innovation"
      headline="Meet the team and learn more about our technology"
      upcomingEvents={{
        images: [
          'http://placehold.it/200x200',
          'http://placehold.it/200x200',
          'http://placehold.it/200x200'
        ],
        names: ['Event name', 'Event name', 'Event name'],
        timeplaces: ['London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018'],
        descriptions: [
          'Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et.', 'Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et.',
          'Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et.'
        ],
        links: ['#', '#', null]
      }}
      laterEvents={{
        images: [
          'http://placehold.it/200x200',
          'http://placehold.it/200x200',
          'http://placehold.it/200x200',
          'http://placehold.it/200x200',
          'http://placehold.it/200x200'
        ],
        names: ['Event name', 'Event name', 'Event name', 'Event name', 'Event name'],
        timeplaces: ['London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018']
      }}
      subheadline="Want us to speak at your next event?"
      body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt."
      ctaLink="#"
      ctaText="Email us"
      />

    <Roadmap
      chapterTitle="Roadmap"
      milestones={{
        checked: [
          true, true, true, true, true, true, false, false, false, false, false, false
        ],
        dates: [
          'Aug 2017', 'Sep 2017', 'Oct 2017', 'Nov 2017', 'Dec 2017', 'Jan 2018', 'Feb 2018', 'Mar 2018', 'Aug 2018', 'Aug 2018', 'Aug 2018', 'Aug 2018',
        ],
        descriptions: [
          'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here', 'Milestone here'
        ]
      }}
      />

    <Explanation
      chapterTitle="The opportunity"
      image="/cards.png"
      imageAlt="Cards"
      headline="We can launch your online gaming platform at a fraction of the cost."
      body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem. Aut voluptatem corporis placeat veritatis autem consequuntur architecto. Expedita natus ratione praesentium."
      secondaryCtaLink="#"
      secondaryCtaText="Discover our software"
      reversed
      />

    <Products
      headline="The Software Suite."
      products={{
        images: [
          'http://placehold.it/200x200',
          'http://placehold.it/200x200',
          'http://placehold.it/200x200',
        ],
        names: [
          'Whitelabel Casino',
          'Hosting platform',
          'VoX Wallet'
        ],
        checklist: [
          ['Provident est voluptatum modi.', 'Provident est voluptatum modi.', 'Provident est voluptatum modi.'],
          ['Provident est voluptatum modi.', 'Provident est voluptatum modi.', 'Provident est voluptatum modi.'],
          ['Provident est voluptatum modi.', 'Provident est voluptatum modi.', 'Provident est voluptatum modi.']
        ]
      }}
      />

  <SignUp
    headline="Keep in the loop"
    body="Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem."
    >
    hello
    </SignUp>

  </div>
)

export default IndexPage
