import React from "react";
import Navbar from "../Components/Navbar";
import ProductList from "../Components/ProductList";
import Footer from "../Components/Footer";

function Newpage() {
  const products = [
    {
      price: 9999,
      name: "Samsung",
      quantity: 0,
    },
    {
      price: 99,
      name: "Apple",
      quantity: 0,
    },
  ];

  return (
    <div>
      <Navbar />

      {/* products is passed as a prop   left side is prop name and in curley brases its variable name*/}
      <ProductList products={products} />

      <Footer />
    </div>
  );
}

export default Newpage;