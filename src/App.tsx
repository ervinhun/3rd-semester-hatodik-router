import './App.css'
import {createBrowserRouter, type RouteObject, RouterProvider} from "react-router-dom";
import Settings, {SettingsPrivacy, SettingsProfile} from "./pages/Settings.tsx";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";

const myRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "search/:searchTerm",
                element: <Search />
            }
        ]
    },
    {
        path: "/settings",
        element: <Settings/>,
        children: [
            {
                path: "privacy",
                element: <SettingsPrivacy/>
            },
            {
                path: "profile",
                element: <SettingsProfile/>
            }
        ]
    }
]



export default function App() {
    return <RouterProvider router={createBrowserRouter(myRoutes)}/>
}