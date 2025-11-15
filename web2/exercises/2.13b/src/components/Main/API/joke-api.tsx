import { useState } from "react"
import { useEffect } from "react";

const JokeAPI = () => {
    interface Joke {
  joke: string;
  category: string;
}
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke({
          joke: data.joke ?? "No joke found",
          category: data.category ?? "Unknown",
        });
      });

  }, []);

  if(!joke){
    return <p>NON</p>
  }
    return (
<div>
      <h3>Random joke</h3>
      <h4>{joke.category}</h4>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>{joke.joke}</p>
      </blockquote>

    </div>
  );
};    
export default JokeAPI ; 