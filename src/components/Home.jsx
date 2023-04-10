import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="/assets/bg.jpeg" className="card-img" alt="Background" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
            </div>   
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
