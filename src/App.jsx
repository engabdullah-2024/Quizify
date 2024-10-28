import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './/components/Header';
import Footer from './/components/Footer';
import LandingPage from './/pages/LandingPage';
import QuizPage from './/pages/QuizPage';
import ResultPage from './/pages/ResultPage';
import About from './/pages/About';
import Contact from './/pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
