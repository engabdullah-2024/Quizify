import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle nav state

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Open/Close the side nav
  };

  return (
    <>
      {/* Header with menu icon */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quizify</h1>
          <button onClick={toggleNav} className="text-3xl md:hidden">
            <FaBars />
          </button>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-indigo-200">Home</Link>
            <Link to="/quiz" className="hover:text-indigo-200">Quiz</Link>
            <Link to="/result" className="hover:text-indigo-200">Results</Link>
          </nav>
        </div>
      </header>

      {/* Side Nav */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-indigo-700 text-white transform ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={toggleNav} className="text-3xl p-4">
          <FaTimes />
        </button>
        <nav className="flex flex-col space-y-4 p-6">
          <Link to="/" onClick={toggleNav} className="hover:text-indigo-300">Home</Link>
          <Link to="/quiz" onClick={toggleNav} className="hover:text-indigo-300">Quiz</Link>
          <Link to="/result" onClick={toggleNav} className="hover:text-indigo-300">Results</Link>
          <Link to="/about" onClick={toggleNav} className="hover:text-indigo-300">About US</Link>
          <Link to="/contact" onClick={toggleNav} className="hover:text-indigo-300">Contact Us </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
