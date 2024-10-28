import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../pages/Questions ';

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true); // Tracks if all answers are correct
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedAnswer !== null) {
      // Check if the answer is correct
      if (selectedAnswer !== questions[currentQuestion].answer) {
        setIsCorrect(false); // Mark as incorrect if one answer is wrong
      } else {
        setScore((prevScore) => prevScore + 2); // Increment score by 2 for a correct answer
      }

      setSelectedAnswer(null); // Reset for next question

      // If there are more questions, move to the next one; otherwise, show results
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const finalScore = isCorrect ? score + 2 : 0; // Set final score: 0 if any answer is wrong
        navigate('/result', { state: { score: finalScore } });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h2 className="text-2xl font-semibold mb-4">
        {questions[currentQuestion].question}
      </h2>
      <div className="space-y-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={`px-4 py-2 border rounded-lg ${
              selectedAnswer === option ? 'bg-green-200' : 'bg-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg"
        onClick={handleNext}
      >
        {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
}

export default QuizPage;
