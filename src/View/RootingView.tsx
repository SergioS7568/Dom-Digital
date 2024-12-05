import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import DomiciliosDigilatesView from "./DomiciliosDigilatesView";

const RootingView = () => {
  const onClickMoveTowardsTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="bg-zinc-500   "
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
      <Stack>
        <Button
          variant="contained"
          startIcon={<ArrowUpwardIcon />}
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
