// ====================================
// INDEX.JS
// Edit layout and content in this file
// ====================================

import React from 'react'

// BLOCKS
// Import each block you wish to use
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
import Faq from '../blocks/faq'
import Footer from '../blocks/footer'

// IMAGES
// Import images, icons and logos you wish to use
import logo from '../../static/logo.svg'
import logoDark from '../../static/logo-blue.svg'
import logoGold from '../../static/logo-gold.svg'
import logoSmall from '../../static/logo-small.svg'
import animatedRing from '../../static/animated-ring.svg'
import tickIcon from '../../static/tick-icon.svg'
import aceIcon from '../../static/ace-icon.svg'
import glassesIcon from '../../static/glasses-icon.svg'
import govIcon from '../../static/gov-icon.svg'
import software1 from '../../static/software-1.jpg'
import software2 from '../../static/software-2.jpg'
import software3 from '../../static/software-3.jpg'
import pressLogo1 from '../../static/logo1.jpg'
import pressLogo2 from '../../static/logo2.jpg'
import pressLogo3 from '../../static/logo3.jpg'
import pressLogo4 from '../../static/logo4.jpg'
import pressLogo5 from '../../static/logo5.jpg'
import pressLogo6 from '../../static/logo6.jpg'
import cards from '../../static/cards.png'
import tokens from '../../static/tokens.png'

// LAYOUT AND CONTENT
// Arrange your blocks and insert content into each one
const IndexPage = ({data}) => (
  <div>

    <Header
      ctaLink="#"
      ctaText="Buy tokens"
      logo={logoGold}
      menuText={[
        'Benefits', 'Team', 'FAQ',
      ]}
      menuLinks={[
        '#one', '#two', '#three'
      ]}
      organisationTwitter="#"
      organisationLinkedin="#"
      organisationFacebook="#"
      />

    <Hero
      headline="The Future of Online Gaming"
      strapline="Varius World Tech ICO"
      mainCtaLink="#"
      mainCtaText="Buy tokens"
      secondaryCtaLink="#"
      secondaryCtaText="Whitepaper"

      >
        <img className="animated-ring" src={animatedRing}/>
    </Hero>

    <Logos
      logos={[pressLogo1, pressLogo2, pressLogo3, pressLogo4,
      pressLogo5, pressLogo6]}
      />

    <Explanation
      reversed={true}
      chapterTitle="The opportunity"
      image={tokens}
      imageAlt="Tokens"
      headline="By offering Blockchain technology exclusively for the online gaming industry, the odds are firmly in our favour."
      body="We’re ahead of the game because we’re using Blockchain to disrupt the global online gaming industry, currently valued in excess of USD 480 billion annually. Our VWT protocol will redefine the way online casinos interactwith their clients, by creating a decentralised ecosystem that makes transactions faster, safer and more cost-effective.</p> <p>There are now no limits to what the online gaming world can achieve."
      mainCtaLink="#"
      mainCtaText="Buy tokens"
      secondaryCtaLink="#"
      secondaryCtaText="Read our whitepaper"
      />

    <SellingPoints
      id="one"
      chapterTitle="Innovation"
      headline="We’re streamlining the online gaming industry, making it faster, fairer, more democratic and more trustworthy for all."
      icon={tickIcon}
      point1Heading="Timely"
      point1Body="Our bespoke protocol can handle up to 50,000 online gaming transactions per second."
      point2Heading="Transparent"
      point2Body="Smart contracts minimise the risk of money laundering or third-party data breaches, putting control back in the hands of users and developers."
      point3Heading="Trusted"
      point3Body="Our Blockchain technology delivers pseudo-anonymous transactions and total privacy for users, without compromising on the factors they demand: security, reliability and trust. For the committed gamer, we offer complete discretion: the only visible transaction is an investment in a stable cryptocurrency"
      />

    <SellingPointsAlt
      chapterTitle="Benefits"
      headline="An entire online gaming ecosystem, where everyone wins"
      point1Icon={govIcon}
      point1Heading="Investors"
      point1Body="The opportunity to disrupt and own a slice of the highly competitive and profitable online gaming industry, by investing in a premium brand with a reputation for state-of-the-art innovation, transparency and flair. "
      point2Icon={glassesIcon}
      point2Heading="Developers"
      point2Body="Our out-of-the-box software suite will give you everything you need to build your own online casino. We’ll help create an outstanding user experience that offers transaction speeds far beyond anything available from ethereum-based platforms."
      point3Icon={aceIcon}
      point3Heading="Players"
      point3Body="At last, online gamers get reassurance that the online casinos they choose are trusted and transparent. Plus, their tokens can be moved to different casinos at will, free of charge, and they get the added benefit of owning an exclusive and much sought-after cryptocurrency."
      />

    <Tabs
      icon={logoSmall}
      headline="Token Sale Information"
      body="We’re on our way to becoming the innovation and technology partner of choice for the entire online gaming industry. You’re invited to be part of this revolution. "
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
      id="two"
      chapterTitle="Team"
      headline="Meet the team behind VWT"
      teamMembers={{
        images: [
          "http://placehold.it/80x80",
          "http://placehold.it/80x80",
          "http://placehold.it/80x80",
          "http://placehold.it/80x80",
          "http://placehold.it/80x80"
        ],
        names: [
          "Gavin Berry",
          "James Vince",
          "Simon Davenport QC",
          "Natasha Hooper",
          "Fatou Camara"
        ],
        titles: [
          "Founder and Chief Executive Officer",
          "Chief Technology Officer",
          "Chief Legal Officer",
          "Brand Ambassador",
          "Marketing Adviser"
        ],
        bios: [
          "Gavin is responsible for defining VWT’s core proposition and long-term business strategy. After building his own multi-million-pound gaming empire he is determined to bring the values of transparency, credibility and fairness into the industry.",
          "James oversees VWT’s technical infrastructure and drives the development and implementation of its protocol technology. He brings extensive experience as an ICO development consultant and as CTO of a crypto-based peer-to-peer betting platform.",
          "Simon provides legal counsel to the executive team and has extensive knowledge in the field of commercial law, and law relating to Blockchain. He was appointed to the Treasury Solicitors' panel of Queen's Counsel in 2011.",
          "Natasha is responsible for VWT’s image and reputation management, as well as solidifying brand elements and presenting the VWT proposition to potential investors. Her previous experience includes PR and branding for several restaurant chains and start-ups.",
          "Fatou is responsible for VWT’s marketing activities. Having worked previously with industry heavyweights Party Gaming and the Betway Group, she brings an extensive range of communication skills and business generation analysis to the role."
        ],
        twitters: [],
        linkedins: []
      }}
      />

    <Events
      chapterTitle={["Events"]}
      headline="Discover the VWT ecosystem for yourself"
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
      subheadline="Want us to participate in your next event?"
      body="We’re currently taking global bookings for guest speaker slots, conferences and exhibitions. Get in touch and we’d be happy to discuss how we can add value to your event."
      ctaLink="#"
      ctaText="Email us"
      />

    <Roadmap
      chapterTitle="Roadmap"
      milestones={{
        checked: [
          true, true, true, true, true, true, false, true, false, false, false, false
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
      chapterTitle="New possibilities"
      image={cards}
      imageAlt="Cards"
      headline="Develop and launch your own online casino, at a fraction of the cost."
      body="VWT is partnering with clients looking to start their own online casino, by offering them a bespoke Blockchain protocol and industry-specific software-as-a-service. The result is a highly valuable software suite, encompassing all the technologies clients need to launch an online casino, at a fraction of traditional online start-up costs."
      secondaryCtaLink="#"
      secondaryCtaText="Show the proposition"
      />

    <Products
      headline="The Software Suite."
      body="Everything needed to create an online gaming platform, including a bespoke protocol, front-end software, back-end software and crypto-wallet."
      products={{
        images: [
          software1, software2, software3
        ],
        names: [
          'VoX Wallet',
          'Hosting platform',
          'Whitelabel Casino'
        ],
        checklist: [
          [
            'The link between our Blockchain casino network and ‘off-chain’ casinos',
            'Players can deposit funds immediately, securely and discretely',
            'Funds can be transferred quickly (with no fee) to the affiliated casino of their choice'
          ],
          [
            'A slick, professional and highly-intuitive interface able to conduct the high-speed transactions essential for online gambling',
            'All winnings verified and kept away from third parties',
            'An outstanding user experience far beyond current ethereum-based options'
          ],
          [
            'Out-of-the-box solution containing all the software needed to start an online casino',
            'Casino operators will have lower overheads and a lower barrier to entry',
            'No third-party interactions means reduced risk of fraud or data breaches'
          ]
        ]
      }}
      />

    <SignUp
      headline="Join our mailing list"
      body="We’re on our way to becoming the innovation and technology partner of choice for the entire online gaming industry. Subscribe now to receive updates and join our revolution. "
      >
      <form form action="https://app.getresponse.com/add_subscriber.html" acceptCharset="utf-8" method="post">
          <input type="email" className="form-control" id="email-subscribe" aria-describedby="subscribe" name="email" placeholder="Your email" required/>
          <input type="hidden" name="campaign_token" value="6m35J" />
          <button type="submit" className="button outline">Subscribe</button>
      </form>
    </SignUp>

    <Faq
      id="three"
      chapterTitle="FAQ"
      tabNames={["Coin", "Account", "Security", "Team", "Legal"]}
      tabQuestions={[
        ["What is VWT?", "Is VWT a utility token?", "Why should I use VWT?"],
        ["Is VWT secure?", "How can I buy and sell VWT?", "Why should I use VWT?"],
        ["What is VWT?", "Is VWT a utility token?", "Why should I use VWT?"],
      ]}
      tabAnswers={[
        [
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
        ],
        [
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
        ],
        [
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
          "Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et. Iure ducimus odit neque et voluptatem quaerat nam voluptatem.",
        ],
      ]}
      subheadline="Can't find your answer?"
      body="Our team is dedicated to answer your questions within 24 hours. How can we help?"
      mainCtaLink="#"
      mainCtaText="Email us"
      secondaryCtaLink="#"
      secondaryCtaText="Subscribe to our newsletter"
      />

    <Footer
      logo={logoGold}
      organisationName="Varius World Tech ICO"
      organisationContact="3rd Floor, 232 Bishopsgate · 0777 777 7777 · info@test.com"
      organisationTwitter="#"
      organisationLinkedin="#"
      organisationFacebook="#"
      menu={{
        text: [
          'Benefits', 'Team', 'FAQ',
        ],
        links: [
          '#one', '#two', '#three'
        ]
      }}
      >
      <form form action="https://app.getresponse.com/add_subscriber.html" acceptCharset="utf-8" method="post">
          <input type="email" className="form-control" id="email-subscribe" aria-describedby="subscribe" name="email" placeholder="Your email" required/>
          <input type="hidden" name="campaign_token" value="6m35J" />
          <button type="submit" className="button outline">Subscribe</button>
      </form>
    </Footer>

  </div>
)

export default IndexPage
