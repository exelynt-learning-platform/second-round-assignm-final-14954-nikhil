import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({});
  const nav = useNavigate();

  const login = async () => {
    const res = await API.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    nav("/");
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} className="form-control my-2"/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} className="form-control my-2"/>
      <button onClick={login} className="btn btn-success">Login</button>
    </div>
  );
}