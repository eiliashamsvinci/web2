import type { Produit } from "../../../types";
import { useState, type SyntheticEvent } from "react";

interface AddProduitfromprops {
  onProduitAdded: (Produit: Produit) => void;
}

const AddproduitForm = ({ onProduitAdded }: AddProduitfromprops) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handelsubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onProduitAdded({ id, name, category, price, description, imageUrl });
    setDescription("");
    setId(0);
    setName("");
    setCategory("");
    setPrice(0);
    setImageUrl("");
  };

  return (
    <form onSubmit={handelsubmit}>
      <div>
        <label>id : </label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value))}
          required
        />
        <label>name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>category : </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <label>price : </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          required
        />
        <label>description : </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>imageUrl : </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <div>
          <button type="submit">Add Produit</button>
        </div>
      </div>
    </form>
  );
};
export default AddproduitForm;
