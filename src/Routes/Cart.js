import React from 'react'

export default function Cart({ cartProducts }) {
  var total = 0
  cartProducts.map((product)=>(
    total = total + product.item.cost
  ))
  return (
    <>
    <div className='container row' style={{margin:"auto"}}>
      {cartProducts.map((product) => (
        <div class="m-2 col-5">
          <div class="card">
            <img class="card-img-top" style={{height:"100px",width:"300px",margin:"auto"}} src={product.item.pic} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">{product.item.name}</h5>
                <h2>Price: {product.item.cost}</h2>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" class="btn btn-primary">+</button>
                  <button type="button" class="btn btn-primary">{product.quantity}</button>
                  <button type="button" class="btn btn-primary">-</button>
                </div>
              </div>

          </div>
        </div>


      ))}
    </div>
    <div class="jumbotron">
        <h1 class="display-4">Total Cart Price: {total} Rs</h1>
        
          <a class="btn btn-primary btn-lg" href="#" role="button">Make Payment</a>
        
      </div>
    </>
  )
}
