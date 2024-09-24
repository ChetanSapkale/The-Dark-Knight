import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage"
import Login from "../Pages/Login"
import WatchListPage from "../Pages/WatchListPage"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/watch-list" element={<WatchListPage/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
