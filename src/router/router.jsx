import { createBrowserRouter } from "react-router-dom";
import Inicial from "../pages/Inicial";
import Pedido from "../pages/Pedido";
import Resumen from "../pages/Resumen";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Inicial />,
        },
            {
                path: "/pedido",
                element: <Pedido />,
            },
            {
                path: "/resumen",
                element: <Resumen />,
            },
        ],
    },
    
]);
