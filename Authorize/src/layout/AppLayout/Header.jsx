import logoImage from "../../assets/logo.png";
import NavBar from "../../components/layout/NavBar";
import SearchBar from "../../features/SearchBar";
import "./header.css";
export default function Header() {
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
