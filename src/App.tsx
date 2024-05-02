import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequreAuth from "./components/Auth/RequireAuth";
import Layout from "./components/Layout/Layout";
import { SignUp } from "./pages/singup/SignUp";
import SignIn from "./pages/signin/SignIn";
import { NotFound } from "./pages/errors/NotFound";
import { ServerError } from "./pages/errors/ServerError";

function App() {
  const allovedRoles = ["user", "admin"];
	if (!localStorage.getItem('autorized')) {
		localStorage.setItem(
			'autorized',
			JSON.stringify({ currentUser: 'guest' })
		);
	}

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/sign-up" element={<SignUp/>}></Route>
            <Route path="/sign-in" element={<SignIn/>}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
            <Route path="/500" element={<ServerError/>}></Route>
            <Route element={<RequreAuth allowedRoles={allovedRoles} />}></Route>
            <Route element={<RequreAuth allowedRoles={["admin"]} />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
