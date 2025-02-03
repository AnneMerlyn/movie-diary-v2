import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IMG_URL } from "../data/tmdb";
import { getSingleMovie } from "../data/tmdb";

const Details = () => {
    const [currMovie, setCurrMovie] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    console.log("movieId", id);
    console.log("currMovie", currMovie);

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (!id) return; // Prevent fetch if movieId is missing

        let ignore = false;
        (async () => {
            try {
                const movieData = await getSingleMovie(id);
                console.log("Fetched movieData:", movieData);
                if (!ignore) {
                    setCurrMovie(movieData);
                }
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        })();

        return () => {
            ignore = true;
        };
    }, [id]);

    if (!currMovie) {
        return <div>Loading movie...</div>;
    }

    const { original_title, poster_path, tagline, overview, genres } =
        currMovie;

    return (
        <div>
            <div className="hero bg-base-200 min-h-[50vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={IMG_URL + poster_path}
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt={original_title}
                    />
                    <div>
                        <h1 className="text-5xl font-bold mb-2">
                            {original_title}
                        </h1>
                        <h2 className="text-3xl indent-4 mb-4">{tagline}</h2>
                        <p className="mb-6">{overview}</p>
                        <div>
                            <h3 className="font-bold">Genres: </h3>
                            <ul className="list-disc ml-8">
                                {genres?.map((genre) => (
                                    <li key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                        </div>
                        <button
                            onClick={handleGoBack}
                            className="btn btn-primary px-4 mt-4"
                        >
                            Go back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
