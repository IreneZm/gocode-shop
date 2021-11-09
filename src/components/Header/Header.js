import { Component } from "react";
import { Slider } from "@mui/material";
import "./Header.css";

class Header extends Component {
  handleChange = (event, newValue) => {
    this.props.handleChangePrice(newValue);
  };

  render() {
    const { filterBySelected, categories, priceRange, minPrice, maxPrice } =
      this.props;

    return (
      <nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select onChange={(ev) => filterBySelected(ev.target.value)}>
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {/* <select>
              <option value="/">All Jackets</option>
              <option value="/">2016</option>
              <option value="/">jacket</option>
              <option value="/">Jackets</option>
              <option value="/">layers</option>
              <option value="/">Obermeyer</option>
              <option value="/">Roxy</option>
              <option value="/">womens</option>
            </select> */}
          </div>

          {/* <div className="collection-sort"> */}
          {/* <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select> */}
          {/* <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            /> */}
          <div className="collection-sort" style={{ width: 150 }}>
            {priceRange.length && (
              <Slider
                value={[priceRange[0], priceRange[1]]}
                min={minPrice}
                max={maxPrice}
                onChange={this.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            )}
          </div>
        </div>
      </nav>
    );
  }
}
// function Header() {
//   return (
//     <nav className="product-filter">
//       <h1>Jackets</h1>

//       <div className="sort">
//         <div className="collection-sort">
//           <label>Filter by:</label>
//           <select>
//             <option value="/">All Jackets</option>
//             <option value="/">2016</option>
//             <option value="/">jacket</option>
//             <option value="/">Jackets</option>
//             <option value="/">layers</option>
//             <option value="/">Obermeyer</option>
//             <option value="/">Roxy</option>
//             <option value="/">womens</option>
//           </select>
//         </div>

//         <div className="collection-sort">
//           <label>Sort by:</label>
//           <select>
//             <option value="/">Featured</option>
//             <option value="/">Best Selling</option>
//             <option value="/">Alphabetically, A-Z</option>
//             <option value="/">Alphabetically, Z-A</option>
//             <option value="/">Price, low to high</option>
//             <option value="/">Price, high to low</option>
//             <option value="/">Date, new to old</option>
//             <option value="/">Date, old to new</option>
//           </select>
//         </div>
//       </div>
//     </nav>
//   );
// }

export default Header;
