import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Treemap from "./components/Treemap/Treemap";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <Header />
        <Treemap />
        <Footer />
      </div>
    </QueryClientProvider>
  )
}

export default App
