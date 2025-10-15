
type Movie = {
  title: string;
  director: string;
};

type CinemaType = {
  name: string;
  movies: Movie[];
};

const Cinema = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const films: CinemaType[] = [
    {
      name: "UGC DeBrouckère",
      movies: [
        { title: "HAIKYU-THE DUMPSTER BATTLE", director: "Susumu Mitsunaka" },
        { title: "GOODBYE JULIA", director: "Mohamed Kordofani" },
        { title: "INCEPTION", director: "Christopher Nolan" },
        { title: "PARASITE", director: "Bong Joon-ho" },
      ],
    },
    {
      name: "UGC Toison d'Or",
      movies: [
        { title: "THE WATCHERS", director: "Ishana Night Shyamalan" },
        { title: "BAD BOYS: RIDE OR DIE", director: "Adil El Arbi, Bilall Fallah" },
        { title: "TENET", director: "Christopher Nolan" },
        { title: "THE IRISHMAN", director: "Martin Scorsese" },
      ],
    },
  ];

  return (
    <div>
      <h1>{pageTitle}</h1>
      {films.map((cinema, index) => (
        <div key={index}>
          <h2>{cinema.name}</h2>
          <table className="cinema-bors">
            <thead>
              <tr className="cinema-bors">
                <th className="cinema-bors">Title</th>
                <th className="cinema-bors">Director</th>
              </tr>
            </thead>
            <tbody>
              {cinema.movies.map((movie, idx) => (
                <tr key={idx}>
                  <td className="cinema-bors">{movie.title}</td>
                  <td className="cinema-bors">{movie.director}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Cinema;
