import { useState, useEffect, type SyntheticEvent } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import type { Film, MovieContext } from "../../../types";

const UpdateFilm = () => {
  const { movies, onMovieUpdated } = useOutletContext<MovieContext>();
  const { id } = useParams<{ id: string }>(); 
  const navigate = useNavigate();

  const filmToEdit = movies.find(f => f.id === parseInt(id || "", 10));

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    if (filmToEdit) {
      setTitle(filmToEdit.title);
      setDirector(filmToEdit.director);
      setDuration(filmToEdit.duration);
      setImageUrl(filmToEdit.imageUrl || "");
      setDescription(filmToEdit.description || "");
      setBudget(filmToEdit.budget || 0);
    }
  }, [filmToEdit]);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!filmToEdit) return;

    await onMovieUpdated({
      id: filmToEdit.id,
      title,
      director,
      duration,
      imageUrl,
      description,
      budget,
    });

    navigate("/movielist"); 
  };

  return (
    <form onSubmit={handleSubmit}>
              <div>
        <label>Id  : {id}</label>
      </div>
      <div>
        <label>Titre :</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Réalisateur :</label>
        <input type="text" value={director} onChange={e => setDirector(e.target.value)} required />
      </div>
      <div>
        <label>Durée :</label>
        <input type="number" value={duration} onChange={e => setDuration(parseInt(e.target.value))} required />
      </div>
      <div>
        <label>URL de l'image :</label>
        <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      </div>
      <div>
        <label>Description :</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Budget :</label>
        <input type="number" value={budget} onChange={e => setBudget(parseInt(e.target.value))} />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateFilm;
