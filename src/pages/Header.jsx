import React from "react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Header.css";
import { useTheme } from "./context";
import {Link}  from "react-router-dom";

function Header() {
  const { Toggletheme, theme } = useTheme();
  return (
    <div className="navbar">
      <img
        src="/icon/logo-black.svg"
        alt="Logo"
        className="logo"
        style={{height:"120px"}}
      />
      <ul>
        <li>
          <input
            type="checkbox"
            value={theme === "Dark"}
            onClick={Toggletheme}
          />
        </li>
        <li>
        {/* <Link to="/CartPage" style={{ textDecoration: 'none', color: 'inherit' }}> */}
        <IconButton aria-label="cart">
          <Badge badgeContent={"1"} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      {/* </Link> */}

        </li>
        <li>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </li>
      </ul>
    </div>
  );
}

export default Header;
