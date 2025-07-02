import { useState } from "react";
import SearchIcon from "../../components/ui/SearchIcon";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import "./searchBar.css";
import SearchList from "./SearchList";
export default function () {
  let [openSearchList, setSearchList] = useState(false);
  let [setValue, products] = useSearchProducts();
  return (
    <div className="search-bar-wrapper">
      <input
        onClick={() => {
          setSearchList(true);
        }}
        className="search-box"
        type="text"
        name=""
        id=""
        placeholder="Search Here..."
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className="search-icon-wrapper">
        <SearchIcon />
      </div>
      {openSearchList && (
        <div
          className="search-list"
          onClick={() => {
            setSearchList(false);
          }}
        >
          <div className="search-list-layer">
            <div className="search-list-items-wrapper">
              {(products || []).map((product) => (
                <SearchList title={product.title} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
