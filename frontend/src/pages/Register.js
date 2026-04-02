import { useState } from "react";
import API from "../api/axios";

export default function Register() {
  const [data, setData] = useState({});

  const register = async () => {
    await API.post("/auth/register", data);
    alert("Registered Successfully");
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setData({...data, name: e.target.value})} className="form-control my-2"/>
      <input placeholder="Email" onChange={e => setData({...data, email: e.target.value})} className="form-control my-2"/>
      <input type="password" placeholder="Password" onChange={e => setData({...data, password: e.target.value})} className="form-control my-2"/>
      <button onClick={register} className="btn btn-primary">Register</button>
    </div>
  );
}