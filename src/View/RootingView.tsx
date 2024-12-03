import { useEffect, useState } from "react";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import { Api } from "../Components/api/Api";
//import Apiedictos from "../Components/env/Apiedictos";
import DomiciliosDigilatesView from "./DomiciliosDigilatesView";

const RootingView = () => {
  const [apiResult, setApiResult] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Api("amin", "", "", "lastname:asc", "0,15");
        setApiResult(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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

      <div>
        <h2>API Test Result:</h2>
        <p>{apiResult ? apiResult : "Loading..."}</p>
      </div>
    </div>
  );
};
export default RootingView;
