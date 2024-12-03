import "./CardFilter_PopUp.css";

import Grid from "../Grid/Grid";
import { useState } from "react";

const CardFilter_PopUp = ({
  closePopup,
  onSearch,
}: {
  closePopup: () => void;
  onSearch: (filterData: {
    surnamePerson: string;
    namePerson: string;
    occupationType: string;
  }) => void;
}) => {
  const [surnamePerson, setSurnamePerson] = useState("");
  const [namePerson, setNamePerson] = useState("");
  const [occupationType, setOcupationType] = useState("");

  const handleSearch = () => {
    const newFilterData = { surnamePerson, namePerson, occupationType };
    //console.log(newFilterData);
    onSearch(newFilterData);
  };

  const cleanInputs = () => {
    setSurnamePerson("");
    setNamePerson("");
    setOcupationType("");
  };

  return (
    <div className="CardFilter-PopUp-Background items-center">
      <Grid container className="justify-items-center">
        <Grid item xs={12} xl={12}>
          <h2 className="font-bold text-lg">Filtrar resultados</h2>
        </Grid>
        <Grid item xs={12} xl={12}>
          <p className="py-4">
            Aquí puede filtrar según uno o varios de los siguientes campos:
          </p>
        </Grid>
        <Grid item xs={12} xl={12}>
          <input
            className="text-lg font-bold"
            placeholder="Apellido"
            type="text"
            value={surnamePerson}
            onChange={(e) => setSurnamePerson(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12}>
          <input
            className="text-lg font-bold"
            placeholder="Nombre"
            type="text"
            value={namePerson}
            onChange={(e) => setNamePerson(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12}>
          <input
            className="text-lg font-bold"
            placeholder="Perfil"
            type="text"
            value={occupationType}
            onChange={(e) => setOcupationType(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} xl={3}>
          <button className="btn" onClick={cleanInputs}>
            LIMPIAR
          </button>
        </Grid>
        <Grid item xs={3} xl={3}>
          <button className="toggle-button" onClick={closePopup}>
            CANCELAR
          </button>
        </Grid>
        <Grid item xs={3} xl={3}>
          <button className="btn" onClick={handleSearch}>
            BUSCAR
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardFilter_PopUp;
