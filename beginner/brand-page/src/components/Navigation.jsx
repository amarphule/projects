const Navigation = () => {
  return (
    <nav className="container">
      <div className="nav-logo">
        <img src="../../images/brand_logo.png" alt="Brand logo" />
      </div>
      <ul className="nav-menu">
        <li>Menu</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button className="nav-login-btn">Login</button>
    </nav>
  );
};

export default Navigation;
