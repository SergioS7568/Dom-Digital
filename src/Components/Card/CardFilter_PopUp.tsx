import Grid from "../Grid/Grid";
import "./CardFilter_PopUp.css";

const CardFilter_PopUp = ({ closePopup }: { closePopup: () => void }) => {
  return (
    <div className="CardFilter-PopUp-Background items-center  ">
      <Grid container>
        <Grid item xs={12} xl={12}>
          <h2>Filtrar resultados</h2>
        </Grid>
        <Grid item xs={12} xl={12}>
          <p>Aqui Puede filtrar según uno o varios de los siguentes campos:</p>
        </Grid>
        <Grid item xs={12} xl={12}>
          <input placeholder="Apellido" type="text"></input>
        </Grid>
        <Grid item xs={12} xl={12}>
          <input placeholder="Nombre" type="text"></input>
        </Grid>
        <Grid item xs={12} xl={12}>
          <input placeholder="Perfil" type="text"></input>
        </Grid>
        <Grid item xs={3} xl={3}>
          <button>LIMPIAR</button>
        </Grid>
        <Grid item xs={3} xl={3}>
          <button className="toggle-button" onClick={closePopup}>
            CANCELAR
          </button>
        </Grid>
        <Grid item xs={3} xl={3}>
          <button>BUSCAR</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CardFilter_PopUp;
