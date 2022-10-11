import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// create contex api
export const quizContext = createContext([]);
const Main = () => {
  const quizs = useLoaderData();
  const quizData = quizs.data;
  return (
    <quizContext.Provider value={quizData}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </quizContext.Provider>
  );
};

export default Main;
