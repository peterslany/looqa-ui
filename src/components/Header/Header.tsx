import { Link } from "react-router-dom";
import "./Header.css";



const Header = () => {
  // TODO: add nostr signer connector

  return (
    <nav>
        {/* TODO: change to router link */}
      <Link to="/" id="looqa">
        looqa
      </Link>
      {/* TODO: handle connect wallet btn */}
      <button>connect nostr account</button>
    </nav>
  );
};

export { Header };
