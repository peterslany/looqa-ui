import "./Header.css";



const Header = () => {
  // TODO: add nostr signer connector

  return (
    <nav>
        {/* TODO: change to router link */}
      <a href="/" id="looqa">
        looqa
      </a>
      {/* TODO: handle connect wallet btn */}
      <button>connect nostr account</button>
    </nav>
  );
};

export { Header };
