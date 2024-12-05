import Grid from "../../Components/Grid/Grid";
//import DomicilioDigitalJustLogo from "../../assets/images/DomicilioDigitalJustLogo.jpeg";

const Header = () => {
  return (
    <div>
      <Grid container gap={1} className="items-center justify-items-end">
        <Grid item xs={6} xl={6}>
          <img
            src={
              "https://domiciliosdigitales.justucuman.gov.ar/img/logos/logo-corte.png"
            }
          ></img>
        </Grid>
        <Grid item xs={6} xl={6}>
          <p>Domicilio digital</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
