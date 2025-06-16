import { createBrowserRouter } from "react-router";
import App from "./App";
import Dictionnaire from "./assets/Pages/Dictionnaire"
import Home from "./assets/Pages/Home";
import ProfilHero from "./assets/Pages/ProfilHero";
import Arbre from "./assets/Pages/Arbre";
import Mythes from "./assets/Pages/Mythes";

const Routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                element: <Home />,
                path: "/",
            },
            {
                element: <Dictionnaire />,
                path: "/dictionnaire",
            },
            {
                element: <ProfilHero />,
                path: "/profilHero/:id",
            },
            {
                element: <Arbre />,
                path: "/arbre",
            },
            {
                element: <Mythes />,
                path: "/mythes",
            }
        ]
    }
])

export default Routes;