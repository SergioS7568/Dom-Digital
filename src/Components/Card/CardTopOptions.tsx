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
      <Grid container className="items-center pt-4">
        <Grid item xs={6} xl={6}>
          <Grid container className="items-center">
            <Grid item xs={12} sm={6}>
              <div></div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <p>Listado</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <button>hiddenButton</button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} xl={6}>
          <p>Mostrar</p>
        </Grid>
        <Grid item xs={2} xl={6}>
          <div>
            <select
              id="showQuantityResults"
              name="showQuantityResults"
              onChange={OnValueSelected}
              className="col-start-1 row-start-1 w-full appearance-none 
              rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500
               placeholder:text-gray-400 focus:outline focus:outline-2 
               focus:-outline-offset-2 focus:outline-indigo-600
              outline outline-cyan-700 sm:text-sm/6 "
            >
              <option value={15}>15</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </Grid>
        <Grid item xs={2} xl={6}>
          <div>
            <button onClick={OnPressShowPopupFilter}>Buscar</button>
          </div>
        </Grid>
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
