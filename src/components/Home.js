import React from "react";
import { useLoaderData } from "react-router-dom";
import Categories from "./Categories";
import "./Home.css";

const Home = () => {
    const quizs = useLoaderData();
  const newQuizes = quizs.data;
  return (
    <div>
      <div className=" bg">
        <div className="content">
          <p>
            This site is test your skill on different types of tech
            languages,such as reactjs, javaScript,CSS, git.Our main motive to
            test your knowledge specific on topics.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {newQuizes.map((quiz) => (
            <Categories key={quiz.id} quiz={quiz}></Categories>
          ))}
      </div>
    </div>
  );
};

export default Home;
