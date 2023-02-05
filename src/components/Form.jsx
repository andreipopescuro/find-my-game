import React, { useState } from "react";
import Buttons from "./Buttons";
import { data } from "../data";
import Section from "./Section";
const Form = ({ choises, setChoises, setGenerated }) => {
  const [progress, setProgress] = useState(14.28);
  const [index, setindex] = useState(0);
  const [err, setErr] = useState(false);

  const changeProgress = (type) => {
    setErr(false);
    if (type === "add") {
      setProgress((prev) => {
        return prev + 14.28;
      });
      setindex((prev) => prev + 1);
    } else if (type === "reduce") {
      setProgress((prev) => {
        return prev - 14.28;
      });
      setindex((prev) => prev - 1);
    } else {
      const copyChoises = [...choises];
      copyChoises[index] = type;
      setChoises(copyChoises);
    }
  };
  return (
    <div className="flex flex-col w-96 h-3/ rounded-md drop-shadow-3xl text-white border-2 border-purple-600">
      <div className="m-auto my-6 bg-gray-800 w-7 h-4  rounded-lg overflow-hidden ">
        <div
          className={`bg-teal-400 h-4 duration-300`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <Section
        {...data[index]}
        changeProgress={changeProgress}
        index={index}
        choises={choises}
        err={err}
        setErr={setErr}
        setGenerated={setGenerated}
      />
    </div>
  );
};

export default Form;
