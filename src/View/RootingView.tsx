import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";

import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import DomiciliosDigilatesView from "./DomiciliosDigilatesView";
import { useState } from "react";

const RootingView = () => {
  const [dark, setDark] = useState(false);

  const onClickMoveTowardsTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onClickToggleThemeMode = () => {
    const newTheme = !dark;
    setDark(newTheme);
  };
  return (
    <div
      className={
        dark
          ? "bg-bgCustomDark flex flex-col main-h-screen"
          : "bg-bgCustomGray flex flex-col main-h-screen"
      }
      style={{
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        minHeight: "100vh",
      }}
    >
      <Header></Header>
      <DomiciliosDigilatesView></DomiciliosDigilatesView>
      <Footer></Footer>
      <Stack position="fixed" bottom={20} right={20} gap={1}>
        <Button
          variant="contained"
          className=" bg-btnCustomFriendlyBlue"
          sx={{ borderRadius: "50%", padding: "18px", paddingRight: "4px" }}
          startIcon={<ArrowUpwardIcon />}
          onClick={onClickMoveTowardsTop}
        ></Button>
        <Button
          variant="contained"
          className="    bg-btnCustomFriendlyBlue"
          sx={
            dark
              ? { borderRadius: "50%", padding: "18px", paddingRight: "4px" }
              : {
                  borderRadius: "50%",
                  padding: "18px",
                  paddingRight: "5px",
                }
          }
          startIcon={dark ? <BedtimeRoundedIcon /> : <LightModeRoundedIcon />}
          onClick={onClickToggleThemeMode}
        ></Button>
      </Stack>
    </div>
  );
};
export default RootingView;

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const result = await Api("amin", "", "", "lastname:asc", "0,15");
//       setApiResult(JSON.parse(result));
//       console.log("apiResult    " + JSON.parse(result));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   fetchData();
// }, []);
