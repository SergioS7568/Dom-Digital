import { useState } from "react";
import { useQuery } from "react-query";

import Button from "@mui/material/Button";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

import Grid from "../Grid/Grid";
import CardFilter_PopUp from "./CardFilter_PopUp";
import TableDomiciliosDigitales from "../Table/TableDomiciliosDigitales";
import { getApiFn, filterByData } from "../api/Api";

import "./CardTopOptions.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export const CardTopOptions = () => {
  const [showPopupFilter, setShowPopupFilter] = useState(false);

  const [filterData, setFilterData] = useState<filterByData>({
    lastname: "",
    name: "",
    profile: "",
  });

  const [itemsPerPage, setItemsPerPage] = useState<number>(15);

  const OnValueSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const QuantityResults = Number(event.target.value);
    setItemsPerPage(QuantityResults);
    console.log("numero    ", QuantityResults);
    console.log("numero  ", itemsPerPage);
  };

  const OnPressShowPopupFilter = () => {
    setShowPopupFilter(true);
  };
  const OnClosePopupFilter = () => {
    setShowPopupFilter(false);
  };
  const pageNumber = 0;

  const { data: Api } = useQuery({
    queryKey: ["Api", itemsPerPage, pageNumber],
    queryFn: (context) => {
      const queryKey = context.queryKey as [string, number];
      return getApiFn(queryKey);
    },
  });

  // const OnSearchFilter = (newFilterData: {
  //   surnamePerson: string;
  //   namePerson: string;
  //   occupationType: string;
  // }) => {
  //   setFilterData(newFilterData);
  //   console.log("Filtering data, it should look like this: ", newFilterData);
  //   OnClosePopupFilter();
  //   console.log(filterData);
  // };

  const OnSearchFilter = (
    newFilterData: filterByData | ((prev: filterByData) => filterByData)
  ) => {
    setFilterData(newFilterData); // Update filter data state
    OnClosePopupFilter(); // Close the popup
  };

  // useEffect(() => {
  //   console.log("running until filter data is shown: ", filterData);
  // }, [filterData]);

  const handleEliminationNameButtonClick = () => {
    setFilterData({
      lastname: filterData.lastname,
      name: "",
      profile: filterData.profile,
    });
  };
  const handleEliminationLastNameButtonClick = () => {
    setFilterData({
      lastname: "",
      name: filterData.name,
      profile: filterData.profile,
    });
  };
  const handleEliminationProfileButtonClick = () => {
    setFilterData({
      lastname: filterData.lastname,
      name: filterData.name,
      profile: "",
    });
  };

  return (
    <div>
      <Grid container className="items-center  pt-4  gap-1   ">
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={8}
          className="flex flex-col items-center sm:items-center mdd:items-center md:items-center lg:items-start  justify-center gap-1"
        >
          <div>
            <p className="font-medium text-start mdd:text-center sm:text-center text-2xl text-textCustomNaturalBlack dark:text-white m-2">
              Listado
            </p>
          </div>

          <div className="justify-self-center flex flex-col sm:flex-col gap-1 items-center min-h-5 min-w-2 md:flex-col mdd:flex-col lg:flex-row">
            {filterData.name ? (
              <Button
                className=" max-h-5 min-w-5 text-sm "
                sx={{
                  borderColor: "rgb(156 163 175)",
                  "&:hover": {
                    borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
                  },
                }}
                endIcon={
                  <HighlightOffSharpIcon sx={{ color: "rgb(156 163 175)" }} />
                }
                variant="outlined"
                onClick={handleEliminationNameButtonClick}
              >
                <p className="text-sm font-medium  text-gray-600 dark:text-gray-400">
                  Nombre: {filterData.name}
                </p>
              </Button>
            ) : (
              <></>
            )}
            {filterData.lastname ? (
              <Button
                className=" max-h-5 min-w-8   text-sm"
                variant="outlined"
                sx={{
                  borderColor: "rgb(156 163 175)",
                  "&:hover": {
                    borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
                  },
                }}
                endIcon={
                  <HighlightOffSharpIcon sx={{ color: "rgb(156 163 175)" }} />
                }
                onClick={handleEliminationLastNameButtonClick}
              >
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Apellido: {filterData.lastname}
                </p>
              </Button>
            ) : (
              <></>
            )}
            {filterData.profile ? (
              <Button
                className=" max-h-5 min-w-8  "
                sx={{
                  borderColor: "rgb(156 163 175)",
                  "&:hover": {
                    borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
                  },
                }}
                endIcon={
                  <HighlightOffSharpIcon sx={{ color: "rgb(156 163 175)" }} />
                }
                variant="outlined"
                onClick={handleEliminationProfileButtonClick}
              >
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Perfil: {filterData.profile}
                </p>
              </Button>
            ) : (
              <></>
            )}
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          lg={12}
          xl={4}
          className="justify-self-center flex flex-row gap-1 items-center place-items-center  "
        >
          <p className=" font-medium text-textCustomNaturalBlack  dark:text-white text-center">
            Mostrar
          </p>
          <div>
            <select
              id="showQuantityResults"
              name="showQuantityResults"
              onChange={OnValueSelected}
              className="select w-20 h-10 border-2  bg-transparent 
              appearance-none px-3 py-2 rounded-md dark:bg-bgCustomDark black: border-btnCustomBackgroundColor
               text-textCustomNaturalBlack dark:text-white dark:border-gray-500 "
            >
              <option
                value={15}
                className=" text-textCustomNaturalBlack dark:text-bgCustomGray  dark:bg-bgCustomDark"
              >
                15
              </option>
              <option
                value={25}
                className=" text-textCustomNaturalBlack dark:text-bgCustomGray"
              >
                25
              </option>
              <option
                value={50}
                className=" text-textCustomNaturalBlack dark:text-bgCustomGray"
              >
                {" "}
                50
              </option>
            </select>
          </div>

          <Button
            className="btn"
            variant="contained"
            onClick={OnPressShowPopupFilter}
            sx={{
              borderColor: "rgb(156 163 175)",
              "&:hover": {
                borderColor: "rgb(63, 117, 168)", // Optional: Change the border color on hover
              },
            }}
            startIcon={<SearchSharpIcon sx={{ color: "#fff" }} />}
          >
            Buscar
          </Button>
        </Grid>
      </Grid>

      <TableDomiciliosDigitales
        filterData={filterData}
        itemsPerPage={itemsPerPage}
        index={0}
      ></TableDomiciliosDigitales>

      {showPopupFilter && (
        <div className="popup-filter-overlay">
          <CardFilter_PopUp
            setFilters={OnSearchFilter}
            filters={filterData} // Pass the current filter data to the popup
            setIndex={() => {}}
            OnClosePopupFilter={OnClosePopupFilter}
          />
        </div>
      )}
    </div>
  );
};
export default CardTopOptions;
