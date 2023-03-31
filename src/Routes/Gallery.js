import React from 'react'

export default function Gallery({productItems,handleAddToCart}) {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" style={{height: "450px"}}
                    src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" style={{height: "450px"}}
                    src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Second slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" style={{height: "450px"}}
                    src="https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <div className="row container" style={{margin:"auto"}}>
      {productItems.map((product)=>(
        
        <div className="card col-5" style={{ margin: "25px" }}>
        <img className="card-img-top" style={{height:"255px"}} src={product.pic} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
          <button onClick={()=>handleAddToCart(product)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>


      ))}
      

    </div>
    </>
  )
}
