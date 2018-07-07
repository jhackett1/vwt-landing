import React from 'react'
import PropTypes from 'prop-types'
import ChartistGraph from 'react-chartist'
import ScrollAnimation from 'react-animate-on-scroll'
import ReactMarkdown from 'react-markdown'

import './chartist.css'

const Graphics = ({
  id,
  headline,
  body,
  chart1Title,
  chart1Data,
  chart1Options,
  chart1Type,
  chart2Title,
  chart2Data,
  chart2Options,
  chart2Type
 }) => (
  <section className="block graphics" id={(id)? id : ""}>
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body)? <ReactMarkdown escapeHtml={false} source={body} />: "" }
      <div className="grid">
        {(chart1Data && chart1Type) ?
          <div className="chart-holder">
            <div className="chart blue">
              <ChartistGraph  data={chart1Data} options={chart1Options} type={chart1Type} />
            {(chart1Title)? <h3 className="headline">{chart1Title}</h3>: "" }
            </div>
            <ul className="legend">
              {chart1Data.labels.map((label, i)=>(
                <ScrollAnimation offset={70} animateIn="fadeIn" key={i} animateOnce={true} >
                  <li>
                    <span className="label blue">{label}</span>
                    <span className="value">{Math.round(chart1Data.series[i] / chart1Data.series.reduce((a, b) => a + b, 0) * 100 )}%</span>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        : ""}
        {(chart2Data && chart2Type) ?
          <div className="chart-holder">
            <div className="chart gradient">
              <ChartistGraph  data={chart2Data} options={chart2Options} type={chart2Type} />
            {(chart2Title)? <h3 className="headline">{chart2Title}</h3>: "" }
            </div>
            <ul className="legend">
              {chart2Data.labels.map((label, i)=>(
                <ScrollAnimation offset={70} animateIn="fadeIn" key={i} animateOnce={true} >
                  <li>
                    <span className="label gradient">{label}</span>
                    <span className="value">{Math.round(chart2Data.series[i] / chart2Data.series.reduce((a, b) => a + b, 0) * 100 )}%</span>
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
        : ""}
      </div>
    </div>
  </section>
)

export default Graphics

Graphics.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
  chart1Title: PropTypes.string,
  chart1Data: PropTypes.object.isRequired,
  chart1Options: PropTypes.object,
  chart1Type: PropTypes.string.isRequired,
  chart2Title: PropTypes.string,
  chart2Data: PropTypes.object.isRequired,
  chart2Options: PropTypes.object,
  chart2Type: PropTypes.string.isRequired
}
