import React from "react";
import { useNavigate } from 'react-router-dom';

const Categories = ({ quiz }) => {
  const { id, logo, name, total } = quiz;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quizdetails/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={logo}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Total: {total}</p>
        <div className="card-actions">
          <button onClick={handleNavigate} className="btn btn-primary">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
