import Link from "next/link";
import React from "react";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import {API_URL} from "../../constant";

export const metadata = {
    title: 'Home'
};

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await  response.json();
    return json;
}
// {JSON.stringify(movies)}
export default async function Page() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {
                movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                    />
                ))
            }
        </div>
    )

}