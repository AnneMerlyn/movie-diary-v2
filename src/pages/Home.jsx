import { useEffect, useState } from "react";

import { getPopularMovies } from "../data/tmdb";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const popMovies = await getPopularMovies();
                console.log(popMovies);
                if (!ignore) {
                    setMovies(popMovies);
                }
            } catch (error) {
                console.error(error);
            }
        })();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div className="mx-auto w-full">
            <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center">
                {movies.map((movie) => (
                    <Link key={movie.id} to={`details/${movie.id}`}>
                        <MovieCard {...movie} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
