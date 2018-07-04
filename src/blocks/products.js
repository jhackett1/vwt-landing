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
                    <li key={j}>{checklistItem}</li>
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
