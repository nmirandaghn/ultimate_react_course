import { useQuizzes } from "./QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } =
    useQuizzes();
  return (
    <div>
      <header className="progress">
        <progress value={index + Number(answer !== null)} max={numQuestions} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        <p>
          <strong>
            {points} / {maxPossiblePoints}
          </strong>
        </p>
      </header>
    </div>
  );
}

export default Progress;
