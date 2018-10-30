import React from "react";

const AdressesList = ({ adressesList }) => (
  <div>
    {adressesList.map((adresse, index) => (
      <li key={index}>{adresse}</li>
    ))}
  </div>
);

export default AdressesList;
