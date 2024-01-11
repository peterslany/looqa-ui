import { Outlet } from "react-router";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ScrollToTop } from "./helpers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Layout>
        <Outlet />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
