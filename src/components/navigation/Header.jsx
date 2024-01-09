// This is the header component with navbar that should be used instead of the header tag in App.jsx

import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-800">
      <nav className="flex gap-4 p-8 justify-end text-white">
        <Link to="/">Home</Link>
        <Link to="/subPageOne">SubpageOne</Link>
        <Link to="/subPageTwo">SubpageTwo</Link>
      </nav>
    </header>
  );
};