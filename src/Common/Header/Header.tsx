import Grid from "../../Components/Grid/Grid";
import DomicilioDigitalJustLogo from "../../assets/images/DomicilioDigitalJustLogo.jpeg";

const Header = () => {
  return (
    <div>
      <Grid container gap={1} alignContent="between">
        <Grid item xs={6} xl={6}>
          <img src={DomicilioDigitalJustLogo}></img>
        </Grid>
        <Grid item xs={6} xl={6}>
          <p>Domicilio digital</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
