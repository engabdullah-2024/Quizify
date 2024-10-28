import { FaAward, FaBullseye, FaUsers, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Quizify</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Quizify is an interactive platform that makes learning fun and engaging. 
          Test your knowledge, challenge your friends, and track your progress.
        </p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaAward className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Achieve Awards</h3>
            <p>Earn badges and certificates based on your performance.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaBullseye className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Track Progress</h3>
            <p>Monitor your scores over time to see your improvement.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaUsers className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Challenge Friends</h3>
            <p>Compete with friends and see who scores the highest.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <FaLightbulb className="text-4xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Learn Smartly</h3>
            <p>Access a variety of quizzes to enhance your knowledge.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-indigo-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our mission is to make learning accessible and enjoyable for everyone.
          We believe that quizzes are a powerful tool for education and personal growth.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today!</h2>
        <p className="text-lg mb-8">
          Join Quizify and start testing your knowledge now.
        </p>
        <Link to="/quiz">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg">
            Take a Quiz
          </button>
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;