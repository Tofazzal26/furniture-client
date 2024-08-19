import { Outlet } from "react-router-dom";
import Header from "../Header/header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
};

export default Root;
