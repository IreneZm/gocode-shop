import Product from "../Product/Product";
import "./Products.css";
import { Component } from "react";

class Products extends Component {
  render() {
    return (
      <section className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    );
  }
}

// function Products() {
//   return (
//     <section className="products">
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//       <Product />
//     </section>
//   );
// }

export default Products;
