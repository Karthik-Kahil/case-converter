import { Outlet } from "react-router-dom";
import NavBar from "./Features/Navbar/NavBar";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
