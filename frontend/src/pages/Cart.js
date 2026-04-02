import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    API.get("/cart").then(res => setCart(res.data));
  }, []);

  return (
    <div className="container mt-3">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.product.name} - {item.quantity}
        </div>
      ))}
    </div>
  );
}