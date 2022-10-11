import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { quizContext } from "../../Layouts/Main";
import Subject from "../Subjects/subject";

const Home = () => {
  const quizSubjects = useContext(quizContext);

  return (
    <div className="mt-2">
      <section className="bg-stone-200 text-black">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            Learn WebDevelopment
            <span className="text-violet-400"> Practicing libray</span>quiz
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Development is all about paracticing .so we arrange some quiz for
            practicing them you can learn something new.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              to="/quiz"
              className="btn btn-info hover:text-white px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900 focus:outline-none focus:ring focus:ring-violet-300"
            >
              Get started
            </Link>
            <button className="px-8 py-3 m-2 text-lg border rounded text-black border-gray-700">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <div className="place-items-center mt-10 m-4 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {quizSubjects.map((subject) => (
          <Subject key={subject.id} subject={subject}></Subject>
        ))}
      </div>
    </div>
  );
};

export default Home;
