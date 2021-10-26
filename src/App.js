import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
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
