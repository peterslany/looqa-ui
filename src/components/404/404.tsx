import { Link } from "react-router-dom";

const _404 = () => {
  return (
    <div>
      <h1>404: Not Found!</h1>
      <p>We are sorry but content you are looking for is not available.</p>
      <Link to="/">Go home.</Link>
    </div>
  );
};

export { _404 as Error404 };
