import { useLocation, useNavigate } from 'react-router-dom';

function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state || { score: 0 };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <h1 className="text-4xl font-bold mb-4">Quiz Completed!</h1>
      <p className="text-2xl">Your Final Score: {score}</p>
      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
        onClick={() => navigate('/')}
      >
        Play Again
      </button>
    </div>
  );
}

export default ResultPage;
