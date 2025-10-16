import Footer from "../Footer";
import Header from "../Header";

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

      <Header
  title="this is title"
  image="https://www.shutterstock.com/image-photo/symmetrical-view-multiple-rows-neatly-600nw-2588718489.jpg"
>
  <h1>Welcome to cinema</h1>
  <p>this is childeren test</p>
</Header>
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
                <Footer footerTitle="this is footer" image="https://assets.justinmind.com/wp-content/uploads/2019/09/website-footer-examples-callista.png"> 
                  <p></p> </Footer>

    </div>
  );
};

export default Cinema;
