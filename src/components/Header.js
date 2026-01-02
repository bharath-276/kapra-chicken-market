import banner from "../assets/images/header-banner.jpg";

function Header() {
  return (
    <header className="header">
      <img
        src={banner}
        alt="Kapra Chicken Market"
        className="header-image"
      />
      <h1 className="shop-name">Kapra Chicken Market</h1>
       <p>Fresh • Hygienic • Daily Best Rates</p>
    </header>
  );
}

export default Header;
