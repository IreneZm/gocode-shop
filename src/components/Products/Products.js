import { Component } from "react";
import Product from "../Product/Product";
import "./Products.css";

class Products extends Component {
  render() {
    const { data } = this.props;

    return (
      <section className="products">
        {data.map(
          (product) =>
            product.category === this.props.category && (
              <Product
                key={product.id}
                img={product.image}
                price={product.price}
                title={product.title}
              />
            )
        )}
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
