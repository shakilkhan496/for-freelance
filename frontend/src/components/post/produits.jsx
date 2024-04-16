import React, { useState } from "react";
import axios from "axios";

const Produits = () => {

  const [categories, setCategories] = useState(0);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionComplete, setDescriptionComplete] = useState("");
  const [produitId, setProduitId] = useState(0);
  const [prix, setPrix] = useState(0);
  const [stock, setStock] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [marque, setMarque] = useState("");
  const [contenu, setContenu] = useState("");
  const [caracteristiques, setCaracteristiques] = useState("");
  const [fdp, setFdp] = useState(0);
  const [string, setString] = useState("");
  const [number, setNumber] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(import.meta.env.VITE_APIPRODUITS, {
        categories,
        titre,
        description,
        descriptionComplete,
        produitId,
        prix,
        stock,
        imageUrl,
        marque,
        contenu,
        caracteristiques,
        fdp,
        string,
        number,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Produits</h2>
      <div>
        <input
          type="number"
          name="categories"
          value={categories}
          onChange={(event) => setCategories(event.target.value)}
          placeholder="Categories"
          required
        />
        <label>Catégories</label>
      </div>
      <div>
        <input
          type="text"
          value={titre}
          name="titre"
          onChange={(event) => setTitre(event.target.value)}
          placeholder="Titre"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="descriptionComplete"
          value={descriptionComplete}
          onChange={(event) => setDescriptionComplete(event.target.value)}
          placeholder="descriptionComplete"
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="produitId"
          value={produitId}
          onChange={(event) => setProduitId(event.target.value)}
          placeholder="ProduitId"
          required
        />
        <label>Produit Id</label>
      </div>
      <div>
        <input
          type="number"
          name="prix"
          value={prix}
          onChange={(event) => setPrix(event.target.value)}
          placeholder="Prix"
          required
        />
        <label>Prix</label>
      </div>
      <div>
        <input
          type="number"
          name="stock"
          value={stock}
          onChange={(event) => setStock(event.target.value)}
          placeholder="Stock"
          required
        />
        <label>Stock</label>
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
          name="caracteristiques"
          value={caracteristiques}
          onChange={(event) => setCaracteristiques(event.target.value)}
          placeholder="Caracteristiques"
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="fdp"
          value={fdp}
          onChange={(event) => setFdp(event.target.value)}
          placeholder="Fdp"
          required
        />
        <label>Frais de port</label>
      </div>
      <div>
        <input
          type="text"
          name="string"
          value={string}
          onChange={(event) => setString(event.target.value)}
          placeholder="String"
          required
        />
      </div>
      <div>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          placeholder="Number"
          required
        />
        <label>Number</label>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};
export default Produits;
