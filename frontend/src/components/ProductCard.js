import API from "../api/axios";

export default function ProductCard({ product }) {

  const addToCart = async () => {
    await API.post("/cart/add", {
      productId: product.id,
      quantity: 1
    });
    alert("Added to cart");
  };

  return (
    <div className="card m-2 p-2" style={{ width: "18rem" }}>
      <h5>{product.name}</h5>
      <p>₹{product.price}</p>
      <button onClick={addToCart} className="btn btn-primary">
        Add to Cart
      </button>
    </div>
  );
}