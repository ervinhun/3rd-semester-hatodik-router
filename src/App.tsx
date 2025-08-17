import './App.css'
import {createBrowserRouter, Outlet, type RouteObject, RouterProvider} from "react-router";

const myRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home/>
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

function Home() {
    return (
        <>
            <div>Home</div>
            <div>
                <a href="/settings">Settings</a>
            </div>
        </>
    );
}


function Settings() {
    return (
        <>
            <div>This is settings page hahaha</div>
            <div>
                <a href="/">&lt; Back</a>&nbsp;
                <a href="/settings">Settings</a>&nbsp;
                <a href="/settings/privacy">Privacy</a>&nbsp;
                <a href="/settings/profile">Profile</a>
            </div>
            <Outlet/>
        </>
    );
}


function SettingsPrivacy() {
    return (
        <div>Setting / Privacy</div>
    );
}


function SettingsProfile() {
    return (
        <div>Editing profile</div>
    );
}

export default function App() {
    return <RouterProvider router={createBrowserRouter(myRoutes)}/>
}