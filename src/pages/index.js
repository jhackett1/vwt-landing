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
import animatedRing from '../../static/animated-ring.png'
import tickIcon from '../../static/tick-icon.svg'
import aceIcon from '../../static/ace-icon.svg'
import glassesIcon from '../../static/glasses-icon.svg'
import govIcon from '../../static/gov-icon.svg'
import software1 from '../../static/software-1@2x.png'
import software2 from '../../static/software-2@2x.png'
import software3 from '../../static/software-3@2x.png'
import pressLogo1 from '../../static/logo1.jpg'
import pressLogo2 from '../../static/logo2.jpg'
import pressLogo3 from '../../static/logo3.jpg'
import pressLogo4 from '../../static/logo4.jpg'
import pressLogo5 from '../../static/logo5.jpg'
import pressLogo6 from '../../static/logo6.jpg'
import cards from '../../static/cards@2x.png'
import tokens from '../../static/coins@2x.png'
import london from '../../static/london-wide.png'
import londonSmall from '../../static/london.png'
import berlin from '../../static/berlin.png'
import sanfran from '../../static/sanfran.png'

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
      body="Using Blockchain to create a decentralised public system solves many of the challenges developers face with existing architecture. Building our own bespoke protocol means we’re disrupting the entire online gaming market."
      icon={tickIcon}
      point1Heading="Timely."
      point1Body="Our bespoke protocol can handle up to 50,000 online gaming transactions per second."
      point2Heading="Transparent."
      point2Body="Smart contracts minimise the risk of money laundering or third-party data breaches, putting control back in the hands of users and developers."
      point3Heading="Trusted."
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
      chapterTitle="Events"
      headline="Discover the VWT ecosystem for yourself"
      body1="We’re hosting events all over the world to demonstrate how our technology will revolutionise the online gambling industry."
      upcomingEvents={{
        images: [
          london,
          berlin,
          sanfran
        ],
        names: ['Event name', 'Event name', 'Event name'],
        timeplaces: ['London, 2nd July 2018', 'Berlin, 2nd July 2018', 'San Fransisco, 2nd July 2018'],
        descriptions: [
          'Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et.', 'Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et.',
          'Provident est voluptatum modi. Saepe reprehenderit dolore nesciunt perspiciatis et.'
        ],
        links: ['#', '#', null]
      }}
      laterEvents={{
        images: [
          londonSmall,
          londonSmall,
          londonSmall,
          londonSmall,
          londonSmall
        ],
        names: ['Event name', 'Event name', 'Event name', 'Event name', 'Event name'],
        timeplaces: ['London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018', 'London, 2nd July 2018']
      }}
      subheadline="Want us to participate in your next event?"
      body2="We’re currently taking global bookings for guest speaker slots, conferences and exhibitions. Get in touch and we’d be happy to discuss how we can add value to your event."
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
      tabNames={["About ICOs", "VWT's ICO", "Other"]}
      tabQuestions={[
        ["What is an ICO?", "Why would I want to invest in an ICO?", "How big is the market for ICOs?", "Are ICOs legal?"],
        ["Why is VWT launching its own ICO?", "How can I participate?", "What is the minimum amount of VWT tokens I can buy?", "And what's the maximum?", "Can I use other cryptocurrencies to participate in the ICO?", "Can I sell my VWT tokens during the ICO?", "How does VWT guard against risks for investors?"],
        ["Is there a reward for referrals?", "Can I register my interest in the casino software now?", "Can my organisation join the VoX wallet?", "I have a question or concern. Who should I contact?"],
      ]}
      tabAnswers={[
        [
          "An ICO is an ‘Initial Coin Offering’. It’s a way for a new company to raise funds, specifically by issuing units of a cryptocurrency. It’s similar to an IPO (Initial Public Offering) although in the case of an ICO, the investor gets the chance to invest in coins or tokens rather than company shares. The aim is that one day those tokens will have a value or be available to spend on the company’s own purpose-built systems.",
          "Cast your mind back to 2009. If someone told you about a great opportunity to invest in a clever start-up called ‘Uber’, would you have taken the chance? It’s definitely easier to say ‘yes’ with the benefit of hindsight. But an ICO presents smart investors with the opportunity to take a shot and play their part in helping to bring an idea to life.",
          "According to a Fabric Ventures and TokenData report, $5.6 billion was raised worldwide through Initial Coin Offerings (ICOs) in 2017. Base-case estimates suggest the global Blockchain market will reach $60.7 billion in 2024.",
          "Yes, it’s perfectly legal to invest in an ICO in almost all countries and jurisdictions, although you should note that to date, ICOs are banned in China and South Korea. For more information, it’s worth taking a look at [this article from Bitcoin Market Journal](https://www.bitcoinmarketjournal.com/ico-regulations/)."
        ],
        [
          "We’re on our way to becoming the innovation and technology partner of choice for the entire online gaming industry. And we’re inviting investors to play a part in this revolution. The purpose of our ICO is to allow investors to participate in the development of the VWT ecosystem in its early stages, to take a stake in the online gaming industry and to allow online players to play casino games seamlessly.",
          `It’s simple… Just follow these three steps:

**Step 1: Create your own Ethereum wallet**

Visit MyEtherWallet.com and create a new wallet. It's quite simple, although we suggest you watch this video to get started.

**Step 2: Install an Ethereum web application**

Install an application called MetaMask into your web browser. When you're done, you can import the files you just downloaded. Once you have your wallet installed into your browser you'll need to copy and paste the wallet address.

**Step 3: Let us know your details**

When you have your wallet address details, email it to ico@variusworldtech.com. You’ll then be ready to take part in our ICO.`,
          `During the VWT private pre-sale, the minimum stake will be 100,000 USD in value. However, if you miss the pre-sale you will be able to purchase tokens from as little as 100 USD and up.`,
          `During the VWT private pre-sale, the minimum stake will be 100,000 USD in value. However, if you miss the pre-sale you will be able to purchase tokens from as little as 100 USD and up.`,
          "Now you’re talking our language. Here at VWT we love high rollers, but as I’m sure you can appreciate, our process for high-volume investors is much more individual and exclusive. To find out more, email [highrollers@variusworldtech.com](mailto:highrollers@variusworldtech.com).",
          "Potentially. If you are lucky enough to be part of the private sale you can use any known cryptocurrency to participate. However, during the public sale we will only be accepting Bitcoin, Ether and Litecoin (rates on the day may change) to buy VWT tokens.",
          "Afraid not. Due to somewhat delicate and complex tokenomics (economics of the token), VWT will remain the only authorised dealers of the VWT token during the ICO. However, if you wish to sell your tokens at any time after the ICO, please email [ico@variusworldtech.com](mailto:ico@variusworldtech.com) and we can arrange this.",
          "We have a partnership in place with a cryptocurrency insurance specialist. In the unlikely event that something goes wrong during the ICO, they are authorised to return the value of the tokens purchased back to investors. At VWT, we’re here to bring trust back to the online gaming industry, so you should feel that your money is in safe hands and that we’ll look after you if an issue arises."
        ],
        [
          `Most definitely. If you refer someone to the VWT ICO who then goes on to buy a significant number of tokens, we will be happy to show you our appreciation. To claim a referral reward, email [affiliates@variusworldtech.com](mailto:affiliates@variusworldtech.com).

Once we have all the details from you and the investors you referred, we’ll confirm the amount with you and process your reward. We will aim to do this within a week of you contacting us, but please allow up to a month during periods of high transaction activity.`,
          "Definitely. We’re currently looking for casinos to showcase our software. If you are interested in running a casino on our platform, please email [casinos@variusworldtech.com](mailto:casinos@variusworldtech.com) and they will be delighted to give you a rundown of our software offering.",
          "Absolutely! It’s our objective to partner with the world’s best online casinos and betting sites. If you have an existing gaming website would integrate perfectly with the VoX Wallet, send an email to [wallet@variusworldtech.com](mailto:wallet@variusworldtech.com) and let’s have a conversation.",
          "The world of cryptocurrencies is complex and fast-changing. That’s why we have a dedicated legal counsel and work closely with regulators to make sure our ICO meets the highest standards and complies with the spirit of investment regulation. If you wish to raise an issue or have spotted something that you think we need to address, email our legal team at [thelegals@variusworldtech.com](mailto:thelegals@variusworldtech.com) and they will be happy to discuss this with you.  "
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
