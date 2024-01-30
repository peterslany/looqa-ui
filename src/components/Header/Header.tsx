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
      <button onClick={() => window.alert("Connect using your email or nostr account.")}>sign in</button>
    </nav>
  );
};

export { Header };
