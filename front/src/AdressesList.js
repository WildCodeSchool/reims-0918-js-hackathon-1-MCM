import React from "react";

const AdressesList = ({ adressesList }) => (
  <div>
    <h2>Liste des adresses à fouiller</h2>
    {adressesList.map((adresse, index) => (
      <li key={index}>{adresse}</li>
    ))}
  </div>
);

export default AdressesList;
