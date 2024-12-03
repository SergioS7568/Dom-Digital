import { useState } from "react";
import Grid from "../Grid/Grid";
import CardFilter_PopUp from "./CardFilter_PopUp";
import "./CardTopOptions.css";
import TableDomiciliosDigitales from "../Table/TableDomiciliosDigitales";

const CardTopOptions = () => {
  const [showPopupFilter, setShowPopupFilter] = useState(false);

  const OnValueSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const QuantityResults = event.target.value;
    console.log(QuantityResults);
  };

  const OnPressShowPopupFilter = () => {
    setShowPopupFilter(true);
  };
  const OnClosePopupFilter = () => {
    setShowPopupFilter(false);
  };

  return (
    <div>
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
                <button>hiddenButton</button>
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
          <div>
            <select
              id="showQuantityResults"
              name="showQuantityResults"
              onChange={OnValueSelected}
              className="collapse collapse-arrow border-base-300 p-3 bg-base-500 border"
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

      <TableDomiciliosDigitales></TableDomiciliosDigitales>

      {showPopupFilter && (
        <div className="popup-filter-overlay">
          <CardFilter_PopUp closePopup={OnClosePopupFilter} />
        </div>
      )}
    </div>
  );
};
export default CardTopOptions;
