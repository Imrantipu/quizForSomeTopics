import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const QuizDetails = () => {
    const qDetails = useLoaderData();
  const ques = qDetails.data.questions;
  const qname = qDetails.data.name;
    return (
        <div>
            <h2 className="mt-5 text-lime-200 text-3xl text-center">Quiz of {qname}</h2>
     <div className='mt-10 '>
     {ques.map((q, index) => (
        <Quiz key={q.id} index={index} q={q}></Quiz>
      ))}
     </div>
        </div>
    );
};

export default QuizDetails;