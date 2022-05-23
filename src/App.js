import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TopHeader from "./components/TopHeader";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <TopHeader />
      <Header />
      <Home />
    </>
  );
}

export default App;
