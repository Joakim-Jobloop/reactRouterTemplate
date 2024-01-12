// This is the header component with navbar that should be used instead of the header tag in App.jsx

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-800 page-padding">
      <nav className="flex items-center justify-end h-20 gap-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/albums">Albums</Link>
      </nav>
    </header>
  );
};