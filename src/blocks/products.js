import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Products = ({
  id,
  headline,
  body,
  products
 }) => (
  <section className="block products" id={(id)? id : ""}>
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
      {(body)? <ReactMarkdown escapeHtml={false} source={body} />: "" }
      {(products)?
        <ul className="products-list">
          {products.names.map((productName, i)=>(
            <div key={i} className="product">
              <div className="image" style={{backgroundImage: `url(${products.images[i]})`}}></div>
              <div className="inner-text">
                <h3>{productName}</h3>
                <ol className="checklist">
                  {products.checklist[i].map((checklistItem, j)=>(
                    <li key={j}>
                      <svg className="icon" height="8" viewBox="0 0 11 8" width="11"><path d="m11 15.1104002 2.8013301 2.8013302 5.9117304-5.9117304" fill="none" strokeWidth="1.333333" transform="translate(-10 -11)"/></svg>
                      {checklistItem}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </ul>
      : ""}
    </div>
  </section>
)

export default Products

Products.propTypes = {
  id: PropTypes.string,
  headline: PropTypes.string.isRequired,
  body: PropTypes.string,
  products: PropTypes.object.isRequired
}
