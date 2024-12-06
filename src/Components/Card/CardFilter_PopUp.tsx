import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

import "./CardFilter_PopUp.css";

import Grid from "../Grid/Grid";
import { filterByData } from "../api/Api";

type Props = {
  setFilters: React.Dispatch<React.SetStateAction<filterByData>>;
  filters: filterByData;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  OnClosePopupFilter: () => void;
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
export const CardFilter_PopUp = (props: Props) => {
  const { setFilters, filters, setIndex, OnClosePopupFilter } = props;

  // const {
  //   register,
  //   reset,
  //   setValue,
  //   handleSubmit: handleSubitRHF,
  // } = useForm<FilterTypeApi>;

  // const [surnamePerson, setSurnamePerson] = useState("");
  // const [namePerson, setNamePerson] = useState("");
  // const [occupationType, setOcupationType] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [surnamePerson, setSurnamePerson] = useState(filters.lastname);
  const [namePerson, setNamePerson] = useState(filters.name);

  const [occupationType, setOccupationType] = useState(filters.profile);

  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState<boolean>(true);
  const options = [
    { label: "ABOGADO/PROCURADOR" },
    { label: "ENTIDAD" },
    { label: "PERITO/OTRO" },
  ];

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

  const ClosesPopUp = () => {
    OnClosePopupFilter();
  };

  return (
    <div
      className="CardFilter-PopUp-Background 
     bg-bgCustomGray dark:bg-bgCustomDark  justify-center items-center self-center"
    >
      <Grid container className="justify-items-start m-8" gap={2}>
        <Grid item xs={12} xl={12}>
          <h2 className="text-2xl font-bold text-black dark:text-gray-300">
            Filtrar resultados
          </h2>
        </Grid>
        <Grid item xs={12} xl={12}>
          <p className="font-medium py-4  text-gray-700 dark:text-textCustomDarkFriendlyWhite">
            Aquí puede filtrar según uno o varios de los siguientes campos:
          </p>
        </Grid>
        <Grid item xs={12} xl={12} className="w-full">
          <TextField
            className="text-lg font-bold w-full text-gray-600 dark:text-textCustomDarkFriendlyWhite"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "gray",
              "& .MuiInputBase-input": {
                color: "#9E9E9E", // Light mode text color
              },
              "& .MuiInputLabel-root": { color: "#9E9E9E" }, // Customize label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#9E9E9E" }, // Customize border color
                "&:hover fieldset": { borderColor: "#9E9E9E" }, // Hover border color
              },
            }}
            label="Apellido"
            variant="outlined"
            type="text"
            fullWidth
            value={surnamePerson}
            onChange={(e) => setSurnamePerson(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12} className="w-full">
          <TextField
            className="text-lg font-bold text-gray-600 dark:text-textCustomDarkFriendlyWhite"
            sx={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "gray",
              "& .MuiInputBase-input": {
                color: "#9E9E9E", // Light mode text color
              },
              "& .MuiInputLabel-root": { color: "#9E9E9E" }, // Customize label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#9E9E9E" }, // Customize border color
                "&:hover fieldset": { borderColor: "#9E9E9E" }, // Hover border color
              },
            }}
            label="Nombre"
            variant="outlined"
            type="text"
            value={namePerson}
            fullWidth
            onChange={(e) => setNamePerson(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} xl={12} className="w-full">
          <Autocomplete
            className="text-lg font-bold text-gray-600 dark:text-textCustomDarkFriendlyWhite "
            sx={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              color: "gray",
              "& .MuiInputBase-input": {
                color: "#9E9E9E", // Light mode text color
              },
              "& .MuiInputLabel-root": { color: "#9E9E9E" }, // Customize label color
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#9E9E9E" }, // Customize border color
                "&:hover fieldset": { borderColor: "#9E9E9E" }, // Hover border color
              },
            }}
            inputValue={occupationType}
            disablePortal
            options={options}
            fullWidth
            getOptionLabel={(option) => option.label} // Display the label of the options
            renderInput={(params) => <TextField {...params} label="Perfil" />}
            onChange={(event, newValue) => {
              setOccupationType(newValue ? newValue.label : ""); // Set the occupationType to the selected label
            }}
          />
        </Grid>
        <Grid item xs={12} sm={3} md={6} className="justify-self-center">
          <Button
            className=" text-sm "
            variant="text"
            sx={{
              borderColor: "rgb(156 163 175)",
              "&:hover": {
                borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
              },
            }}
            endIcon={
              <DeleteOutlineSharpIcon sx={{ color: "rgb(156 163 175)" }} />
            }
            onClick={cleanInputs}
          >
            <p className="text-lg font-semibold text-gray-600 dark:text-gray-400">
              LIMPIAR
            </p>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6} className="justify-self-center">
          <Button
            className=" text-sm"
            variant="text"
            sx={{
              borderColor: "rgb(156 163 175)",
              "&:hover": {
                borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
              },
            }}
            onClick={ClosesPopUp}
          >
            <p className="text-lg font-semibold text-red-600">CANCELAR</p>
          </Button>

          <Button
            className=" text-sm"
            variant="text"
            sx={{
              borderColor: "rgb(156 163 175)",
              "&:hover": {
                borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
              },
            }}
            onClick={handleSearch}
          >
            <p className="text-lg font-semibold text-btnCustomBackgroundColor">
              BUSCAR
            </p>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardFilter_PopUp;
