import React from "react";

const Quiz = (props) => {
  const { q, index } = props;
  const { question, options } = q;
  return (
    <div className="card mt-5 w-4/5 bg-primary text-primary-content mx-auto h-auto">
      <div className="card-body">
        <h2 className="card-title text-fuchsia-500 text-xl">
          Quiz {index + 1}: {question}
        </h2>
        <div className="form-control">
          <div>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[0]} name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[0]}</span>
            </label>
          </div>
          <div>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[1]} name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[1]}</span>
            </label>
          </div>
          <div>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[2]} name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[2]}</span>
            </label>
          </div>
          <div>
            <label className="flex justify-items-center mt-3">
              <input type="radio" value={options[3]}  name="radio-7" className="radio radio-info" />
              <span className="label-text ml-3">{options[3]}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
