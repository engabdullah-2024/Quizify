import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-50">
      <h1 className="text-4xl font-bold text-indigo-700">Welcome to Quizify</h1>
      <p className="text-lg mt-4 text-gray-600">Test your knowledge with fun questions!</p>
      <button
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        onClick={() => navigate('/quiz')}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default LandingPage;
