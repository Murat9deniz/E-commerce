import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img src="https://sem.arel.edu.tr/wp-content/uploads/2023/02/1_SwFB1o_k1LGprN-XRUZQ8w-1.jpeg" className="card-img" alt="Background" height="550px"/>
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
