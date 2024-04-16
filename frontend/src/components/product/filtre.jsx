import React, { useState } from "react";

const Filter = ({ products, setFilteredProducts }) => {
  const [priceFilter, setPriceFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [materialFilter, setMaterialFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
    filterProducts();
  };

  const handleBrandFilterChange = (event) => {
    setBrandFilter(event.target.value);
    filterProducts();
  };

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
    filterProducts();
  };

  const handleMaterialFilterChange = (event) => {
    setMaterialFilter(event.target.value);
    filterProducts();
  };

  const handleColorFilterChange = (event) => {
    setColorFilter(event.target.value);
    filterProducts();
  };

  const filterProducts = () => {
    let filteredProducts = products.filter((product) => {
      let match = true;

      if (priceFilter && product.price !== priceFilter) {
        match = false;
      }

      if (brandFilter && product.brand !== brandFilter) {
        match = false;
      }

      if (typeFilter && product.type !== typeFilter) {
        match = false;
      }

      if (materialFilter && product.material !== materialFilter) {
        match = false;
      }

      if (colorFilter && product.color !== colorFilter) {
        match = false;
      }

      return match;
    });

    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <h2>Filters</h2>
      <label>
        Price:
        <input type="text" value={priceFilter} onChange={handlePriceFilterChange} />
      </label>
      <label>
        Brand:
        <input type="text" value={brandFilter} onChange={handleBrandFilterChange} />
      </label>
      <label>
        Type:
        <input type="text" value={typeFilter} onChange={handleTypeFilterChange} />
      </label>
      <label>
        Material:
        <input type="text" value={materialFilter} onChange={handleMaterialFilterChange} />
      </label>
      <label>
        Color:
        <input type="text" value={colorFilter} onChange={handleColorFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
