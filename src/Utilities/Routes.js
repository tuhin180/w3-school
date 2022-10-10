import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../Layouts/Main";
import Quiz from "../components/Quiz/Quiz";
import Chart from "../components/Chart/Chart";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/quiz", element: <Quiz></Quiz> },
      { path: "/chart", element: <Chart></Chart> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);
export default router;
