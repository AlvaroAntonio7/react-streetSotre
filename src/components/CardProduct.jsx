import reactLogo from '../assets/react.svg'

const CardProduct = ({imageProduct, titleProduct, detailProduct, priceProduct}) => {
  return (
  <>
    <div className="card mb-3" style={{
        fontFamily: 'Verdana',
        maxWidth: '540px',
        }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageProduct} className="img-fluid rounded-start" alt={titleProduct}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titleProduct}</h5>
            <p className="card-text">{detailProduct}</p>
            <div>
              <span className="card-text"><small className="text-body-secondary">$ {priceProduct}</small></span>
              <button>Details</button>
              </div>
          </div>
        </div>
      </div>
    </div>
         

  </>
  )
}

export default CardProduct
