import React from "react";
import { Image } from "antd";
import {
  KeyboardArrowDown,
  SearchOutlined,
  PercentOutlined,
  FavoriteBorderOutlined,
  ShoppingCart,
  Person2Outlined,
  FavoriteOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Image src="/img/en.png" alt="Languages Icon" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>VND</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link className='link' to={"/products/1"}>Áo</Link>
          </div>
          <div className="item">
            <Link className='link' to={"/products/2"}>Quẩn</Link>
          </div>
          <div className="item">
            <Link className='link' to={"/products/3"}>Phụ kiện</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to={"/"}>NHAT DRESS SHOP</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to={"/"}>Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to={"/"}>About</Link>
          </div>
          <div className="item">
            <Link className='link' to={"/"}>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to={"/"}>Stores</Link>
          </div>
          <div className="icons">
            <SearchOutlined/>
            <Person2Outlined/>
            <FavoriteOutlined/>
            <div className="cart-icon">
              <ShoppingCart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
