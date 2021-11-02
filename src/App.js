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
  };

  filterBySelected = (selectedCategory) => {
    this.setState({ category: selectedCategory });
  };

  fetchProducts = async () => {
    //intentionally should be used to allow re-render after an error in fetching and clicking the function
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
    } catch (e) {
      this.setState({ error: true, loading: false });
    }
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

  // categories = this.state.data
  //   .map((p) => p.category)
  //   .filter((value, index, array) => array.indexOf(value) === index);

  render() {
    const { category, data, categories, error, loading } = this.state;

    return (
      <div className="App">
        {loading ? (
          <Container maxWidth="sm">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <CircularProgress
                color="secondary"
                sx={{ alignSelf: "center" }}
              />
            </Box>
          </Container>
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
            />

            {/* <button onClick={() => this.setState({ show: !this.state.show })}>
            {btnText}
          </button> */}

            {/* {this.state.show && ( */}
            <Products data={data} category={category} />
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
