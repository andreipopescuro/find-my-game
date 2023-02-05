import React from "react";

const Buttons = ({ changeProgress, index, choises, setErr, setGenerated }) => {
  const handleSubmit = () => {
    const state = choises.some((el) => el !== null);
    if (!state) {
      setErr(true);
    } else {
      setGenerated(true);
    }
  };
  return (
    <div className="flex">
      {index > 0 && (
        <button
          onClick={() => changeProgress("reduce")}
          className="flex-1 p-4 hover:bg-slate-900 bg-cyan-500"
        >
          Previous
        </button>
      )}

      {index < 6 && (
        <button
          onClick={() => changeProgress("add")}
          className="flex-1 hover:bg-slate-900 h-full p-4 bg-pink-700"
        >
          Next
        </button>
      )}
      {index === 6 && (
        <button
          className="flex-1 hover:bg-slate-900 h-full p-4 bg-fuchsia-900"
          onClick={handleSubmit}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Buttons;
