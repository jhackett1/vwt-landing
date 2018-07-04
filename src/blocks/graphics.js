import React from 'react'
import ChartistGraph from 'react-chartist'

import './chartist.css'

const Graphics = ({
  chapterTitle,
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
  <section className="block graphics">
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body)? <p>{body}</p>: "" }
      {(chart1Data && chart1Type) ?
        <div>
          <div className="chart blue">
            <ChartistGraph  data={chart1Data} options={chart1Options} type={chart1Type} />
          {(chart1Title)? <h3 className="headline">{chart1Title}</h3>: "" }
          </div>
          <ul className="legend">
            {chart1Data.labels.map((label, i)=>(
              <li key={i}>
              <span className="label blue">{label}</span>
              <span className="value">{Math.round(chart1Data.series[i] / chart1Data.series.reduce((a, b) => a + b, 0) * 100 )}%</span>
              </li>
            ))}
          </ul>
        </div>
      : ""}
      {(chart2Data && chart2Type) ?
        <div>
          <div className="chart gradient">
            <ChartistGraph  data={chart2Data} options={chart2Options} type={chart2Type} />
          {(chart2Title)? <h3 className="headline">{chart2Title}</h3>: "" }
          </div>
          <ul className="legend">
            {chart2Data.labels.map((label, i)=>(
              <li key={i}>
              <span className="label gradient">{label}</span>
              <span className="value">{Math.round(chart2Data.series[i] / chart2Data.series.reduce((a, b) => a + b, 0) * 100 )}%</span>
              </li>
            ))}
          </ul>
        </div>
      : ""}
    </div>
  </section>
)

export default Graphics
