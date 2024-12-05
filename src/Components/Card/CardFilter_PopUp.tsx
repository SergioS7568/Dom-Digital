import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./CardFilter_PopUp.css";

import Grid from "../Grid/Grid";
import { filterByData } from "../api/Api";

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<filterByData>>;
  filters: filterByData;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

// const CardFilter_PopUp = ({
//   closePopup,
//   onSearch,
// }: {
//   closePopup: () => void;
//   // onSearch: (filterData: {
//   //   surnamePerson: string;
//   //   namePerson: string;
//   //   occupationType: string;
//   // }) => void;
//   onSearch: (props: Props) => void;
// }) => {
const CardFilter_PopUp = (props: Props) => {
  const { setFilters, filters, setIndex } = props;

  // const {
  //   register,
  //   reset,
  //   setValue,
  //   handleSubmit: handleSubitRHF,
  // } = useForm<FilterTypeApi>;

  // const [surnamePerson, setSurnamePerson] = useState("");
  // const [namePerson, setNamePerson] = useState("");
  // const [occupationType, setOcupationType] = useState("");

  const [surnamePerson, setSurnamePerson] = useState(filters.lastname);
  const [namePerson, setNamePerson] = useState(filters.name);
  const [occupationType, setOccupationType] = useState(filters.profile);

  const handleSearch = () => {
    setIndex(0); // Reset the index
    const newFilterData: filterByData = {
      lastname: surnamePerson,
      name: namePerson,
      profile: occupationType,
    };
    setFilters(newFilterData); // Update the filter data
  };

  const cleanInputs = () => {
    setSurnamePerson("");
    setNamePerson("");
    setOccupationType("");
  };

  const ClosesPopUp = () => {};

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
            onChange={(e) => setOccupationType(e.target.value)}
          />
        </Grid>
        <Grid item xs={3} xl={3}>
          <button className="btn" onClick={cleanInputs}>
            LIMPIAR
          </button>
        </Grid>
        <Grid item xs={3} xl={3}>
          <button className="toggle-button" onClick={ClosesPopUp}>
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
