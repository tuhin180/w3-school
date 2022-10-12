import { useLoaderData } from "react-router-dom";
import QuizSection from "../QuizSection/QuizSection";

const Quiz = () => {
  const programs = useLoaderData();
  const { name, questions } = programs;

  return (
    <div className="mt-10  ">
      <h1 className="text-center text-3xl">
        Quiz of <span className="text-red-400">{name}</span>
      </h1>

      {/* quiz section  */}

      <div>
        {questions.map((question, index) => {
          return (
            <QuizSection
              key={question.id}
              option={question}
              serial={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
