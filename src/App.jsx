import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { SubPageOne } from "./page/SubPageOne";
function App() {
  return (
    <>
      <Router>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/subPageOne">about</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageOne" element={<SubPageOne />} />
        </Routes>
        <footer>this is the footer</footer>
      </Router>
    </>
  );
}

export default App;
