import React, { Component } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { CircularProgress } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// import { data } from "./data/data";
import "./App.css";

class App extends Component {
  state = {
    show: false,
    category: "",
    data: [],
    categories: [],
    loading: false,
    error: false,
    priceRange: [0, 1000],
    minPrice: 0,
    maxPrice: 1000,
  };

  componentDidMount() {
    this.fetchProducts();
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     this.setState({ data });

    //     const categories = data
    //       .map((p) => p.category)
    //       .filter((value, index, array) => array.indexOf(value) === index);

    //     this.setState({ categories });
    //   });
  }

  fetchProducts = async () => {
    // intentionally should be used to allow re-render after an error in fetching and clicking the function
    // this.setState({ loading: false });

    try {
      this.setState({ loading: true, error: false });

      const res = await fetch("https://fakestoreapi.com/products");
      //incorrect URL for error check
      // const res = await fetch("https://festoreapi.com/products");
      const data = await res.json();
      const categories = await data
        .map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index);

      // this.setState({ data, categories });
      this.setState({ data, categories, loading: false });
      this.setPriceRanges(data);
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
  };

  setPriceRanges(data) {
    const productWithMinPrice = data.reduce((prev, curr) =>
      prev.price < curr.price ? prev : curr
    );
    console.log(productWithMinPrice);
    const productWithMaxPrice = data.reduce((prev, curr) =>
      prev.price > curr.price ? prev : curr
    );
    console.log(productWithMaxPrice);
    this.setState({
      priceRange: [productWithMinPrice.price, productWithMaxPrice.price],
      minPrice: productWithMinPrice.price,
      maxPrice: productWithMaxPrice.price,
    });
  }
  filterBySelected = (selectedCategory) => {
    this.setState({ category: selectedCategory });
  };

  // categories = this.state.data
  //   .map((p) => p.category)
  //   .filter((value, index, array) => array.indexOf(value) === index);

  render() {
    const { category, data, categories, error, loading } = this.state;

    return (
      <div className="App">
        {loading ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <CircularProgress color="secondary" sx={{ alignSelf: "center" }} />
          </Box>
        ) : error ? (
          <>
            <h1> There is an error </h1>
            <button onClick={this.fetchProducts}>Try again</button>
          </>
        ) : (
          <>
            <Header
              categories={categories}
              filterBySelected={this.filterBySelected}
              priceRange={this.state.priceRange}
              handleChangePrice={(value) =>
                this.setState({ priceRange: value })
              }
              minPrice={this.state.minPrice}
              maxPrice={this.state.maxPrice}
            />

            {/* <button onClick={() => this.setState({ show: !this.state.show })}>
            {btnText}
          </button> */}

            {/* {this.state.show && ( */}
            <Products
              data={data}
              category={category}
              priceFilter={this.state.priceRange}
            />
            {/* )} */}
          </>
        )}
      </div>
    );
  }
}

// function App() {
//   return (
//       <div className="App">
//         <Header />
//         <Products />
//       </div>
//   );
// }

export default App;
