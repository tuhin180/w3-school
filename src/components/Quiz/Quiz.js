import { stringify } from "postcss";
import { useLoaderData } from "react-router-dom";

const Quiz = () => {
  const programs = useLoaderData();
  const { name } = programs;
  console.log(name);

  return (
    <div>
      <h1 className="text-center">Quiz of {name}</h1>
    </div>
  );
};

export default Quiz;
