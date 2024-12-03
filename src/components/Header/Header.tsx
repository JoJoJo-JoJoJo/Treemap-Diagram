import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title" id="title">
        Kickstarter Pledges
      </h1>
      <p className="desc" id="description">
        Top 100 Pledged Campaigns (by category)
      </p>
    </header>
  );
};

export default Header;
