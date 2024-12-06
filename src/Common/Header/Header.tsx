import Grid from "../../Components/Grid/Grid";
//import DomicilioDigitalJustLogo from "../../assets/images/DomicilioDigitalJustLogo.jpeg";

const Header = () => {
  return (
    <div>
      <Grid
        container
        gap={1}
        className="items-center justify-items-end sm:justify-items-center sm:gap-5"
      >
        <Grid item xs={12} xl={6}>
          <img
            src={
              "https://domiciliosdigitales.justucuman.gov.ar/img/logos/logo-corte.png"
            }
          ></img>
        </Grid>
        <Grid item xs={12} xl={6} className="justify-self-center">
          <h1 className=" font-bold text-3xl  text-textCustomNaturalBlack  dark:text-white">
            Domicilio digital
          </h1>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
