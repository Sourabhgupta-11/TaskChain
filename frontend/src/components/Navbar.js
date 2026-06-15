import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isDemo = localStorage.getItem("walletMode") === "demo";

  const logout = () => {
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("walletMode");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h3>Todo 3.0</h3>
        {isDemo && (
          <span
            style={{
              marginLeft: "10px",
              fontSize: "12px",
              padding: "2px 8px",
              borderRadius: "999px",
              background: "rgba(250, 204, 21, 0.15)",
              color: "#facc15",
              border: "1px solid rgba(250, 204, 21, 0.4)",
            }}
          >
            Demo Mode
          </span>
        )}
      </div>

      <div className="nav-right">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/view">View</NavLink>
        <NavLink to="/update">Update</NavLink>
        <NavLink to="/delete">Delete</NavLink>

        <span className="nav-divider" />

        <button className="logout-btn" onClick={logout}>
          {isDemo ? "Exit Demo" : "Logout"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
