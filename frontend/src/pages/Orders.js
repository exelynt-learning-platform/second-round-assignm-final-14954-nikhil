import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div className="container mt-3">
      <h2>Orders</h2>
      {orders.map(o => (
        <div key={o.id}>
          Order #{o.id} - ₹{o.total}
        </div>
      ))}
    </div>
  );
}