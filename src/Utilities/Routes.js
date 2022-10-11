import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../Layouts/Main";
import Quiz from "../components/Quiz/Quiz";
import Chart from "../components/Chart/Chart";
import Blog from "../components/Blog/Blog";
import { LoadData } from "../Loader/LoadData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: LoadData,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/quiz/:pid",
        shouldRevalidate: () => false,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.pid}`
          );
          const { data } = await res.json();
          return data;
        },
        element: <Quiz></Quiz>,
      },
      { path: "/chart", element: <Chart></Chart> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
export default router;
