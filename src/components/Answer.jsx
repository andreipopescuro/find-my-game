import React, { useEffect, useState, CSSProperties } from "react";
import { Configuration, OpenAIApi } from "openai";
import { computeChoises } from "../compute";
import { GridLoader } from "react-spinners";
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const Answer = ({ choises, setGenerated, generated }) => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [er, setEr] = useState(false);
  useEffect(() => {
    setLoading(true);
    setEr(false);
    const resp = computeChoises(choises);
    const fetchAnswer = async () => {
      try {
        const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: `Give me a list of games without any note or text, just the list as an ordonated list divided by a comma because i will split the answer in a array by comma based on: ${resp}`,
          temperature: 0,
          max_tokens: 500,
        });
        const text = response.data.choices[0].text;
        const splitted = text.split(",");
        setMessage(splitted);
      } catch (err) {
        setEr(true);
      }
      setLoading(false);
    };
    fetchAnswer();
  }, []);
  if (er) {
    return (
      <div className="text-xl text-red-900">I'm sorry, an error occured</div>
    );
  }
  if (loading) {
    return (
      <GridLoader
        color="teal"
        loading={loading}
        size={100}
        data-testid="loader"
      />
    );
  }
  return (
    <div className="flex flex-col w-96 h-3/ rounded-md drop-shadow-3xl text-white border-2 border-purple-600">
      <div className="text-3xl text-center p-4 text-teal-700">
        Games for you
      </div>
      <ol className="p-4">
        {message?.map((m, i) => (
          <li key={i}>
            <a href={`https://google.com/search?q=${m}`} target="_blank">
              {m}
            </a>
          </li>
        ))}
      </ol>
      <div
        className="text-center bg-teal-700 cursor-pointer py-2 "
        onClick={() => setGenerated(!generated)}
      >
        Back to form
      </div>
    </div>
  );
};

export default Answer;
