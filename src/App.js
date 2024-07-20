import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter, Link, useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import FormLayout from "./pages/FormLayout/FormLayout";

function App() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="App">
      <SideBar />
      <Navbar />
      <nav aria-label="breadcrumb" className="bread">
        <ul className="breadcrumb">
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <li
                key={to}
                className="breadcrumb-item active"
                aria-current="page"
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </li>
            ) : (
              <li key={to} className="breadcrumb-item">
                <Link to={to}>
                  {value.charAt(0).toUpperCase() + value.slice(1) + "    /"}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <main style={{ marginLeft: "20%", position: "absolute", top: "14vh" }}>
        <Routes>
          <Route path={"/form/proFormLayout"} element={<FormLayout />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
