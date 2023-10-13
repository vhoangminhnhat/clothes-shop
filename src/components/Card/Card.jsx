import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item?.id}`}>
      <div className="card">
        <div className="image">
          <img src={item?.img1} alt="" className="mainImg" />
          <img src={item?.img2} alt="" className="secondImg" />
        </div>
        <h2>{item?.title}</h2>
        <div className="prices">
          <h3>
            {`${new Intl.NumberFormat("en-US", {
              useGrouping: true,
              maximumFractionDigits: 0,
            }).format(item?.price)} VND`}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
