import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://user-images.githubusercontent.com/99301796/219900773-d6d02038-e2a0-4334-9f28-c14d40ab6fe7.png" className="logo nostr" alt="Nostr logo" />
        </a>
        |x|
        <a href="https://bitcoin.org" target="_blank">
          <img src="https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-1-1.png" className="logo bitcoin" alt="Bitcoin logo" />
        </a>
      </div>
      <h1>looqa</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} experiences proved
        </button>

      </div>
      <p className="read-the-docs">
        Coming soon in 2024.
      </p>
    </>
  );
}

export default App;
