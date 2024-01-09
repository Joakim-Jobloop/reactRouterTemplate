import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { SubPageOne } from "./page/SubPageOne";
import { SubPageTwo } from "./page/SubPageTwo";
import { Footer } from "./components/navigation/Footer";
import { Header } from "./components/navigation/Header";
function App() {
  const url = "https://jsonplaceholder.typicode.com/";
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageOne" element={<SubPageOne url={url} />} />
          <Route path="/subPageTwo" element={<SubPageTwo url={url} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
