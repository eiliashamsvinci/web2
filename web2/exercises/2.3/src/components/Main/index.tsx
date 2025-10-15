import PizzaMenu from "./PizzaMenu";
import Cinema from "./Cinema";
import "./Main.css"

const Main = () => {
  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; 
      </p>
      <audio id="audioPlayer" controls autoPlay>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        Your browser does not support the audio element.
      </audio>
      <PizzaMenu />
      <br />
      <Cinema />

    </main>
  );
};
export default Main ; 