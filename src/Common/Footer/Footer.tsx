import Grid from "../../Components/Grid/Grid";
import { version } from "../../../package.json";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  //console.log(year);

  // console.log(version);
  return (
    <div className="justify-items-center ">
      <p className="   text-textCustomNaturalBlack  dark:text-white text-center ">
        @{year} - Poder Judicial de Tucumán - Dirección de Sistemas <br />v
        {version}
      </p>
    </div>
  );
};
export default Footer;
