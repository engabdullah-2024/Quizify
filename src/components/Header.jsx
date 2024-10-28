import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaQuestionCircle } from 'react-icons/fa'; // Import icons

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // Toggle nav state

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Open/Close the side nav
  };

  return (
    <>
      {/* Header with Quiz Icon */}
      <header className="bg-indigo-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo with Icon */}
          <div className="flex items-center space-x-2">
            
            <FaQuestionCircle className="text-4xl" /> {/* Quiz logo */}
            <h1 className="text-3xl font-extrabold tracking-wide">Quizify</h1>
          </div>

          {/* Menu Icon for Mobile */}
          <button onClick={toggleNav} className="text-3xl md:hidden">
            <FaBars />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-indigo-200">Home</Link>
            <Link to="/quiz" className="hover:text-indigo-200">Quiz</Link>
            <Link to="/result" className="hover:text-indigo-200">Results</Link>
            <Link to="/about" className="hover:text-indigo-200">About Us</Link>
            <Link to="/contact" className="hover:text-indigo-200">Contact Us</Link>
            <Link to="/dev" className="hover:text-indigo-200">About Dev</Link>
          </nav>
        </div>
      </header>

      {/* Side Nav for Mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-indigo-700 text-white transform ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Icon */}
        <button onClick={toggleNav} className="text-3xl p-4">
          <FaTimes />
        </button>

        {/* Logo Inside Side Nav */}
        <div className="flex items-center space-x-2 px-6 py-4">
          <FaQuestionCircle className="text-4xl" /> {/* Quiz logo inside side nav */}
          <h1 className="text-3xl font-extrabold">Quizify</h1>
        </div>

        {/* Side Nav Links */}
        <nav className="flex flex-col space-y-4 p-6">
          <Link to="/"  className="hover:text-indigo-300">Home</Link>
          <Link to="/quiz"  className="hover:text-indigo-300">Quiz</Link>
          <Link to="/result"  className="hover:text-indigo-300">Results</Link>
          <Link to="/about"  className="hover:text-indigo-300">About Us</Link>
          <Link to="/contact"  className="hover:text-indigo-300">Contact Us</Link>
           <Link to="/dev"     className="hover:text-indigo-200">About Dev</Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
