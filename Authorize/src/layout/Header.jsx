import logoImage from "../assets/logo.png";
import NavBar from "../components/layout/NavBar";
// import SearchBar from "../components/layout/SearchBar";
import SearchBar from "../features/SearchBar/SearchBar";
import "./header.css";
export default function () {
  return (
    <header>
      <div className="logo">
        <img src={logoImage} alt="logo-image" />
      </div>
      <div className="header-search-bar-wrapper">
        <SearchBar />
      </div>

      <NavBar />
    </header>
  );
}
