import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    const { data, category } = this.props;

    // let filteredData =
    //   category === ""
    //     ? data
    //     : data.filter((product) => product.category === category);

    //The same as above but written better:
    let filteredData = category
      ? data.filter((product) => product.category === category)
      : data;

    return (
      <section className="products">
        {filteredData.map(({ id, image, price, title }) => (
          <Product key={id} img={image} price={price} title={title} />
        ))}
      </section>

      // <section className="products">
      //   {data.map((product) => (
      //     <Product
      //       key={product.id}
      //       img={product.image}
      //       price={product.price}
      //       title={product.title}
      //     />
      //   ))}
      // </section>

      // <section className="products">
      //   {data.map((product, id) => (
      //     <Product key={id} product={product} />
      //   ))}
      // </section>

      // <section className="products">
      //   {data.map(({ id, image, price, title }) => (
      //     <Product key={id} img={image} price={price} title={title} />
      //   ))}
      // </section>
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
