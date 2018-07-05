import React from 'react'

const Products = ({
  headline,
  products
 }) => (
  <section className="block products">
    <div className="container">
      {(headline)? <h2 className="headline">{headline}</h2>: "" }
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
                      <svg className="icon" height="8" viewBox="0 0 11 8" width="11"><path d="m11 15.1104002 2.8013301 2.8013302 5.9117304-5.9117304" fill="none" stroke-width="1.333333" transform="translate(-10 -11)"/></svg>
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
