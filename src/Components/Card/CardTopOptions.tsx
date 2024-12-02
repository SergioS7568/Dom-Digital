import Grid from "../Grid/Grid";

const CardTopOptions = () => {
  const OnValueSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();

    const QuantityResults = event.target.value;
    console.log(QuantityResults);
  };

  const OnPressShowCardFilter = () => {
    console.log("Pressed!");
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={6} xl={12}>
          <p>Listado</p>
        </Grid>
        <Grid item xs={6} xl={6}>
          <div>
            <p>hiddenOption</p> <button></button>
          </div>
        </Grid>
        <Grid item xs={6} xl={6}>
          <p>Mostrar</p>
        </Grid>
        <Grid item xs={6} xl={6}>
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
        <Grid item xs={6} xl={6}>
          <div>
            <button onClick={OnPressShowCardFilter}>Buscar</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default CardTopOptions;
