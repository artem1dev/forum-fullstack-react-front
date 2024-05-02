import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequreAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";

function App() {
  const allovedRoles = ["user", "admin"];
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<RequreAuth allowedRoles={allovedRoles} />}></Route>
            <Route element={<RequreAuth allowedRoles={["admin"]} />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
