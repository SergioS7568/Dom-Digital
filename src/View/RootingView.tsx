import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import DomiciliosDigilatesView from "./DomiciliosDigilatesView";

const RootingView = () => {
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
    </div>
  );
};
export default RootingView;
