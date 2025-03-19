function Product({ name, price, image }) {
  return (
    <div className="product">
      <img src={image} alt={name} className="" />
      <h2>{name}</h2>
      <p>Prezzo: ${price}</p>
      <button>Aggiungi al carrello</button>
    </div>
  )
}

export default Product
