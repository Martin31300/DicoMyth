import "./App.css";
import { Outlet } from "react-router";
import Nav from "./assets/Components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="app-container">
        <Outlet />
      </div>
    </>
  );
}

export default App