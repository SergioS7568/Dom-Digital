import Grid from "../../Components/Grid/Grid";
import { version } from "../../../package.json";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  console.log(year);

  console.log(version);
  return (
    <div>
      <Grid container>
        <Grid item xs={12} xl={12}>
          <p>@{year} - Poder Judicial de Tucumán - Dirección de Sistemas</p>
          <p> v{version}</p>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
