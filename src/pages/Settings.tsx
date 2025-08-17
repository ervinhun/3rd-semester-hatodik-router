import {Outlet, useLocation} from "react-router";

export default function Settings() {
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

function logLocation(calledFrom:string) {
    const path = useLocation();
    console.log(path);
    console.log(calledFrom);
}

export function SettingsPrivacy() {
    logLocation("Privacy");
    return (
        <div>Setting / Privacy</div>
    );
}


export function SettingsProfile() {
    logLocation("Profile");
    return (
        <div>Editing profile</div>
    );
}
