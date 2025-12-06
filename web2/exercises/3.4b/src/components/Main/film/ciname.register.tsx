 import { useState } from "react";
 import type { SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { MovieContext } from "../../../types";


const RegisterCinema = () => {

const { registerUser } = useOutletContext<MovieContext>();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      await registerUser({ username, password });
      navigate("/");
    } catch (err) {
      console.error("RegisterCinema::error: ", err);
    }
  };

  const handleUsernameInputChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setUsername(input.value);
  };

  const handlePasswordChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setPassword(input.value);
  };

  return (
    <div>
      <h1>Ajoutez un utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          value={username} 
            type="text"
            id="username"
            name="username"
            onChange={handleUsernameInputChange}
            required
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <button  type="submit">Créer le compte</button>
      </form>
    </div>
  );
}; 

export default RegisterCinema;