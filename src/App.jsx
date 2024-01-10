import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/MainPage";

import { Footer } from "./components/navigation/Footer";
import { Header } from "./components/navigation/Header";
import { PostsPage } from "./page/PostsPage";
import { AlbumsPage } from "./page/AlbumsPage";
function App() {
  const url = "https://jsonplaceholder.typicode.com/";
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/posts" element={<PostsPage url={url} />} />
          <Route path="/albums" element={<AlbumsPage url={url} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
