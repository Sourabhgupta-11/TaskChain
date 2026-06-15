import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isDemo = localStorage.getItem("walletMode") === "demo";
  const address = localStorage.getItem("walletAddress");

  const logout = () => {
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("walletMode");
    navigate("/");
  };

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/")}>
        <span className="logo-dot" />
        <h3>TaskChain</h3>
        <span className="chain-pill">Sepolia</span>
        {isDemo && <span className="demo-pill">Demo Mode</span>}
      </div>

      <div className="nav-right">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/view">View</NavLink>
        <NavLink to="/update">Update</NavLink>
        <NavLink to="/delete">Delete</NavLink>

        <span className="nav-divider" />

        {address && (
          <span className="wallet-pill" title={address}>
            🟢 {shortAddress}
          </span>
        )}

        <button className="logout-btn" onClick={logout}>
          {isDemo ? "Exit Demo" : "Logout"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;