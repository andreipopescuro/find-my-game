import { useState } from "react";
import Answer from "./components/Answer";
import Form from "./components/Form";

function App() {
  const [choises, setChoises] = useState(Array(7).fill(null));

  const [generated, setGenerated] = useState(false);
  return (
    <div className="font-Ubuntu min-h-screen bg-gradient-to-r from-violet-800 to-fuchsia-800 flex justify-center items-center w-screen">
      {generated ? (
        <Answer
          choises={choises}
          setGenerated={setGenerated}
          generated={generated}
        />
      ) : (
        <Form
          choises={choises}
          setChoises={setChoises}
          setGenerated={setGenerated}
        />
      )}
    </div>
  );
}

export default App;
