import "./Header.css";
import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="product-filter">
        <h1>Jackets</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select
              onChange={(ev) => this.props.filterBySelected(ev.target.value)}
            >
              {/* <option>---</option> */}
              {this.props.categories.map((category) => (
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

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
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
