import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";

import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import DomiciliosDigilatesView from "./DomiciliosDigilatesView";
import { useState } from "react";

const RootingView = () => {
  const [dark, setDark] = useState(false);

  const onClickToggleThemeMode = () => {
    const newTheme = !dark;
    setDark(newTheme);
    console.log(dark);
  };

  const onClickMoveTowardsTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className={
        dark
          ? "bg-bgCustomDark flex flex-col main-h-screen dark"
          : "bg-bgCustomGray flex flex-col main-h-screen"
      }
      style={{
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
        minHeight: "100vh",
      }}
    >
      <div className="px-6 py-3 sm:px-20 sm:py-5 flex-grow">
        <Header></Header>
        <DomiciliosDigilatesView></DomiciliosDigilatesView>
        <Footer></Footer>
      </div>

      <Stack position="fixed" bottom={10} right={20} gap={1}>
        <Button
          variant="contained"
          className="     bg-btnCustomFriendlyBlue"
          sx={
            dark
              ? { borderRadius: "50%", padding: "20px", paddingRight: "4px" }
              : {
                  borderRadius: "50%",
                  padding: "20px",
                  paddingRight: "7px",
                }
          }
          startIcon={
            dark ? (
              <BedtimeRoundedIcon fontSize="large" />
            ) : (
              <LightModeRoundedIcon fontSize="large" />
            )
          }
          onClick={onClickToggleThemeMode}
        ></Button>
        <Button
          variant="contained"
          className=" bg-btnCustomFriendlyBlue   "
          sx={{
            borderRadius: "50%",
            padding: "20px",
            paddingRight: "6px",
          }}
          startIcon={<KeyboardArrowUpSharpIcon fontSize="large" />}
          onClick={onClickMoveTowardsTop}
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
