import './App.css'
import {createBrowserRouter, type RouteObject, RouterProvider} from "react-router";

const myRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/settings",
        element: <Settings/>
    }
]

function Home() {
    return (
        <div>Home</div>
    );
}


function Settings() {
    return (
        <div>This is settings page hahaha</div>
    );
}

export default function App() {
    return <RouterProvider router={createBrowserRouter(myRoutes)}/>
}