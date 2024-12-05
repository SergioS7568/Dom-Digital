import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Grid from "../Grid/Grid";
import CardFilter_PopUp from "./CardFilter_PopUp";
import TableDomiciliosDigitales from "../Table/TableDomiciliosDigitales";
import { getApiFn, filterByData } from "../api/Api";

import "./CardTopOptions.css";

const CardTopOptions = () => {
  const [showPopupFilter, setShowPopupFilter] = useState(false);

  const [filterData, setFilterData] = useState<filterByData>({
    lastname: "",
    name: "",
    profile: "",
  });

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

  const [itemsPerPage, setItemsPerPage] = useState<number>(15);

  const {
    data: Api,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Api", itemsPerPage],
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

  return (
    <div>
      {isLoading ? <p>No se cargo nada</p> : <p>Datos cargados</p>}

      {isError ? <div>ERROR</div> : <div>Its working!</div>}
      <Grid container className="items-center pt-4  gap-1">
        <Grid item xs={12} lg={3}>
          <Grid container className="items-center  ">
            <Grid item xs={12} lg={12}>
              <div></div>
            </Grid>
            <Grid item xs={12} lg={12}>
              <div>
                <p>Listado</p>
              </div>
            </Grid>
            <Grid item xs={12} lg={12}>
              <div>
                <button className="btn btn-square ">
                  Nombre: {filterData.name}
                </button>
                <button className="btn btn-square">
                  Apellido: {filterData.lastname}
                </button>
                <button className="btn btn-square">
                  Perfil: {filterData.profile}
                </button>
              </div>
            </Grid>
            <Grid item xs={12} lg={12}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} ls={1}></Grid>
        <Grid item xs={1} ls={1}></Grid>
        <Grid item xs={1} ls={1}></Grid>

        <Grid item xs={2} xl={1}>
          <p className="justify-self-end">Mostrar</p>
        </Grid>
        <Grid item xs={2} xl={1}>
          <div tabIndex={0} className="collapse border-cyan-700">
            <select
              id="showQuantityResults"
              name="showQuantityResults"
              onChange={OnValueSelected}
              className="select w-20 h-14"
            >
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={2} xl={1}>
          <button className="btn" onClick={OnPressShowPopupFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            Buscar
          </button>
        </Grid>
        <Grid item xs={3} ls={1}></Grid>
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
          />
        </div>
      )}
    </div>
  );
};
export default CardTopOptions;
