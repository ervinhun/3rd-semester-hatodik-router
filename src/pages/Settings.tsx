import {Outlet} from "react-router";

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


export function SettingsPrivacy() {
    return (
        <div>Setting / Privacy</div>
    );
}


export function SettingsProfile() {
    return (
        <div>Editing profile</div>
    );
}
