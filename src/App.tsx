import { Outlet } from "react-router";
import "./App.css";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
