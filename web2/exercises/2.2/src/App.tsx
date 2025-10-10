const PageTitle = (props: { title: string }) => {
  return <h1>{props.title}</h1>;
};



interface Movie {
  title: string;
  director: string;
}
interface PageTitleProps {
  title: string;
}

interface CinemaProps {
  name: string;
  movies: Movie[];
}
const Movie = (props: { title: string; director: string }) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.director}</h3>
    </div>
  );
};

const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2 className="name">{props.name}</h2>
      <ul>
        {props.movies.map((movie, index) => (
          <li key={index}>
            <h3>{movie.title}</h3>
            <p>Réalisateur : {movie.director}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";


  const cinema1Name = "UGC DeBrouckère";


  const cinema2Name = "UGC Toison d'Or";


  
   const cinema1: Movie[] = [
    { title: "HAIKYU-THE DUMPSTER BATTLE", director: "Susumu Mitsunaka" },
    { title: "GOODBYE JULIA", director: "Mohamed Kordofani" },
  ];

  const cinema2: Movie[] = [
    { title: "THE WATCHERS", director: "Ishana Night Shyamalan" },
    { title: "BAD BOYS: RIDE OR DIE", director: "Adil El Arbi, Bilall Fallah" },
  ];

  return (

    <div>
      <PageTitle title={pageTitle} />
      <Cinema name={cinema1Name} movies={cinema1} />
      <Cinema name={cinema2Name} movies={cinema2} />
    </div>
  );
};
export default App;
