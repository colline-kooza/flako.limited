import Link from "next/link";
import React from "react";
import { GrFormNext } from "react-icons/gr";

export default function SideBar({ data }) {
  return (
    <div className="left-side-bar">
      <div className="category-list">
        <div className="show-all-cat-dropdown">
          <span>
            Show All Catergories
            <GrFormNext />
          </span>
        </div>
        <div className="category-title" href="#">
          You may also like
        </div>
        <ul>
          {data.splice(0, 5).map((cat) => {
            return <Link href={`/catergory/${cat.slug}`}>{cat.title}</Link>;
          })}
        </ul>
      </div>
      <div className="filter-section">
        <div className="electro_product_filter">
          <h3>Filters</h3>
        </div>
        <div className="brands">
          <h3>Brands</h3>
          <form action="#" className="checkmark">
            <input
              type="checkbox"
              id="checkmark"
              name="checkmark"
              value="check"
            />
            <label for="checkmark">{data.title}</label>
          </form>
        </div>
        <div className="price-filter">
          <h3>Price</h3>
          <div className="price_slider_amount">
            <button>Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
