import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    const { data, category, priceFilter } = this.props;

    // let filteredData =
    //   category === ""
    //     ? data
    //     : data.filter((product) => product.category === category);

    //The same as above but written better:
    // let filteredData = category
    //   ? data.filter((product) => product.category === category)
    //   : data;

    //with pricerange
    const filteredData = data.filter(
      (product) =>
        product.price >= priceFilter[0] &&
        product.price <= priceFilter[1] &&
        (!category || (category && product.category === category))
    );

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
