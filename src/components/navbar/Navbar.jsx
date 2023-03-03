import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__heading">GPT-3</div>
      <ul className="nav__items">
        <li>Home</li>
        <li>What is GPT?</li>
        <li>Open AI</li>
        <li>Case Studies</li>
        <li>Library</li>
      </ul>

      <div className="nav__buttons">
        <a>Sign in</a>
        <a>Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
