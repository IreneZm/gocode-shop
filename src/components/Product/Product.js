import "./Product.css";
import { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-image">
          <img src={this.props.product.image} />
          {/* <img src={this.props.img} /> */}
          {/* <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" /> */}
        </div>
        <div className="product-info">
          <h5>{this.props.product.title}</h5>
          {/* <h5>{this.props.title}</h5> */}
          {/* <h5>Winter Jacket</h5> */}
          <h6>{this.props.product.price}</h6>
          {/* <h6>{this.props.price}</h6> */}
          {/* <h6>$99.99</h6> */}
        </div>
      </div>
    );
  }
}

// function Product() {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
//       </div>
//       <div className="product-info">
//         <h5>Winter Jacket</h5>
//         <h6>$99.99</h6>
//       </div>
//     </div>
//   );
// }

export default Product;
