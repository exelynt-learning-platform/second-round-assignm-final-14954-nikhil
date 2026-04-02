import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link to="/" className="navbar-brand">E-Commerce</Link>

      <div>
        <Link to="/cart" className="btn btn-warning mx-2">Cart</Link>
        <Link to="/orders" className="btn btn-info mx-2">Orders</Link>
        <Link to="/login" className="btn btn-light">Login</Link>
      </div>
    </nav>
  );
}