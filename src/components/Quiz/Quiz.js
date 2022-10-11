import { useLoaderData } from "react-router-dom";
import QuizSection from "../QuizSection/QuizSection";

const Quiz = () => {
  const programs = useLoaderData();
  const { name, questions } = programs;

  return (
    <div className="mt-10 bg-red-100">
      <h1 className="text-center">Quiz of {name}</h1>
      {questions.map((question, index) => {
        return (
          <QuizSection key={question.id} option={question} serial={index + 1} />
        );
      })}
    </div>
  );
};

export default Quiz;
