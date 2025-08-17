import {Link, useParams} from "react-router";
import "./css/Search.css";


export default function Search() {

    function showErvin() {
        return (
            <>
                <a href="https://github.com/ervinhun" target="_blank">
                    <div className="result-card">
                        <img
                            src="https://avatars.githubusercontent.com/u/127263111?s=400&u=57610344f7da9a2e619d42e7328f5a3f7b4d1a12&v=4"
                            alt="ervin"
                            className="result-image"/>
                        <div className="result-text">
                            <h3> Ervin github</h3>
                            <p>I am a software developer</p>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/c/ErvinBacsko" target="_blank">
                    <div className="result-card">
                        <img
                            src="https://yt3.googleusercontent.com/ytc/AIdro_mWI_r8sAI0rH_6hxXvWnp5AK8STXPSW2-ZdDt8Z-PYRaUU=s160-c-k-c0x00ffffff-no-rj"
                            alt="ervin"
                            className="result-image"
                        />
                        <div className="result-text">
                            <h3>Ervin Youtube channel</h3>
                            <p>I am a software developer</p>
                        </div>
                    </div>
                </a>
            </>
        )
    }


    const searchTerm = useParams();
    const notFound = "😞 No results were found for the search term ";

    return (
        <>
            <Link to="/">❌ Close</Link>
            <h2>Search Results for <strong>{JSON.stringify(searchTerm.searchTerm)}</strong></h2>
            <div>
                {searchTerm?.searchTerm?.toLowerCase() === "ervin"
                    ? showErvin()
                    : `${notFound} ${searchTerm?.searchTerm}`}
            </div>

        </>
    )
}