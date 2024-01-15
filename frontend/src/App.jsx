import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const getJokesData = async () => {
      try {
        let jokes = await axios.get("api/jokes");
        if (jokes?.status == 200) {
          setJokes(jokes?.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJokesData();
  }, []);

  return (
    <>
      <h1>full stack begginer project</h1>
      <p>JOKES : {jokes?.length}</p>

      {jokes?.length > 0 &&
        jokes?.map((joke, index) => {
          return (
            <div>
              <h3>{joke?.title}</h3>
              <p>{joke?.content}</p>
            </div>
          );
        })}
    </>
  );
}

export default App;
