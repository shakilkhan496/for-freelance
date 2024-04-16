import React, { useState } from "react";
import axios from "axios";

const Autre = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionComplete, setDescriptionComplete] = useState("");
  const [contenu, setContenu] = useState("");
  const [categories, setCategories] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");
  const [marque, setMarque] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [produitId, setProduitId] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_APIAUTRE, {
        title,
        description,
        descriptionComplete,
        contenu,
        categories,
        caracteristiques,
        marque,
        imageUrl,
        produitId,
        userId: props.userId,
        price,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const { userId } = props;

  return (
    <form onSubmit={handleSubmit}>
      <h2>autre</h2>
      <div>
        <input
          type="text"
          value={title}
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
      </div>
      <div>
        <textarea
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <div>
        <textarea
          name="descriptionComplete"
          value={descriptionComplete}
          onChange={(event) => setDescriptionComplete(event.target.value)}
          placeholder="descriptionComplete"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={contenu}
          name="contenu"
          onChange={(event) => setContenu(event.target.value)}
          placeholder="Contenu"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={categories}
          name="categories"
          onChange={(event) => setCategories(event.target.value)}
          placeholder="Categories"
          required
        />
      </div>
      <div>
        <input
          type="text"
          value={marque}
          name="marque"
          onChange={(event) => setMarque(event.target.value)}
          placeholder="Marque"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Image URL"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="produitId"
          value={produitId}
          onChange={(event) => setProduitId(event.target.value)}
          placeholder="Produit ID"
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          placeholder="Price"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="caracteristiques"
          value={caracteristiques}
          onChange={(event) => setCaracteristiques(event.target.value)}
          placeholder="Caracteristiques"
          required
        />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};
export default Autre;
