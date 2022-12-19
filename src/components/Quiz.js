import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaEye } from "react-icons/fa";


const Quiz = (props) => {
  const { q, index } = props;
  const { question, options } = q;
  const onChangeValue = (event) => {
    const targetValue = event.target.value;
    const val = q.correctAnswer;
    if (targetValue === val) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };
  const onClickValue = (event) => {
    const rightval = q.correctAnswer;
    toast.success(rightval);
  };
  return (
    <div className="card mt-5 w-4/5 bg-primary text-primary-content mx-auto h-auto">
      <div className="card-body">
        <div className="flex justify-between items-center">
        <h2 className="card-title text-fuchsia-500 text-xl">
          Quiz {index + 1}: {question}
        </h2>
        <span onClick={onClickValue}>
          <FaEye />
        </span>
        </div>
        <div className="form-control">
          <div onChange={onChangeValue}>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[0]} name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[0]}</span>
            </label>
          </div>
          </div>
          <div className="form-control">
          <div onChange={onChangeValue}>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[1]} name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[1]}</span>
            </label>
          </div>
          </div>
          <div className="form-control">
          <div onChange={onChangeValue}>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[2]} name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[2]}</span>
            </label>
          </div>
          </div>
          <div className="form-control">
          <div onChange={onChangeValue}>
            <label  className="flex justify-items-center mt-3">
              <input type="radio" value={options[3]}  name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[3]}</span>
            </label>
          </div>
          </div>
        
      </div>
      <Toaster />
    </div>
  );
};

export default Quiz;
