import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";

const Section = ({
  title,
  options,
  changeProgress,
  index,
  choises,
  err,
  setErr,
  setGenerated,
}) => {
  const [selected, setSelected] = useState("");
  const handleChange = (e, option) => {
    setSelected(e.target.value);
    changeProgress(option);
  };
  useEffect(() => setSelected(choises[index]));
  return (
    <div className="pt-6" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
      <div className="ml-2">{title}</div>
      <div>
        <div className="m-2">
          {options.map((option, index) => (
            <div key={index} className="flex">
              <input
                type="radio"
                id={option}
                name={title}
                value={option}
                onChange={(e) => handleChange(e, option)}
                checked={selected === option}
                className="mr-2"
              />
              <label htmlFor={option} className="flex-1">
                {option}
              </label>
            </div>
          ))}
          {err && (
            <div className="text-red-600">Minimum one option is required</div>
          )}
        </div>
        <Buttons
          changeProgress={changeProgress}
          index={index}
          choises={choises}
          setErr={setErr}
          setGenerated={setGenerated}
        />
      </div>
    </div>
  );
};

export default Section;
