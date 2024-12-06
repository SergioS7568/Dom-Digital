import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";

type Props = {
  ApiResult: {
    id: number;
    name: string;
    lastname: string;
    profile: {
      id: number;
      name: string;
    };
  };
};

const CardsDomicilioDigitales = (props: Props) => {
  const { ApiResult } = props;
  if (!ApiResult) {
    return <div>cargando...</div>;
  }
  return (
    <div className="block lg:hidden m-2">
      <Card
        style={{ width: "100%", borderRadius: "1.5rem" }}
        className="bg-textCustomDarkFriendlyWhite dark:bg-btnCustomTableColor"
      >
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className=" text-textCustomNaturalBlack dark:text-bgCustomGray"
              sx={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              {ApiResult.lastname}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className=" text-textCustomNaturalBlack dark:text-bgCustomGray"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "semibold",
              }}
            >
              {ApiResult.name}
            </Typography>
            <Divider
              variant="middle"
              className="text-gray-700"
              sx={{
                color: "#9E9E9E",
              }}
            />
            <Typography
              variant="body2"
              className=" text-textCustomNaturalBlack dark:text-bgCustomGray"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "semibold",
                justifySelf: "end",
              }}
            >
              {ApiResult.profile.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default CardsDomicilioDigitales;
