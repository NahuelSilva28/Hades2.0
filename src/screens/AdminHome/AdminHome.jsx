import React from "react";
import "./style.css";

export const AdminHome = () => {
  return (
    <div className="admin-home">
      <div className="div">
        <div className="hub">
          <div className="overlap-group">
            <div className="overlap">
              <div className="text-wrapper">Home</div>
              <img className="home-page" alt="Home page" src="https://c.animaapp.com/2yGU6gkQ/img/home-page@2x.png" />
            </div>
            <div className="overlap-2">
              <img className="img" alt="Combo chart" src="https://c.animaapp.com/2yGU6gkQ/img/combo-chart@2x.png" />
              <div className="text-wrapper-2">Statistics</div>
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-3">Products</div>
              <img className="img" alt="Basket" src="https://c.animaapp.com/2yGU6gkQ/img/basket@2x.png" />
            </div>
            <img
              className="menu-vertical"
              alt="Menu vertical"
              src="https://c.animaapp.com/2yGU6gkQ/img/menu-vertical@2x.png"
            />
            <div className="overlap-4">
              <img className="male-user" alt="Male user" src="https://c.animaapp.com/2yGU6gkQ/img/male-user@2x.png" />
              <div className="text-wrapper-4">Samuel Evans</div>
            </div>
          </div>
        </div>
        <p className="good-morning-samuel">
          <span className="span">G</span>
          <span className="text-wrapper-5">ood morning, Samuel!</span>
        </p>
      </div>
    </div>
  );
};
