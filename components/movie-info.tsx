import styles from './movie-info.module.css'
import {API_URL} from "../constant";

export const metadata = {
    title: 'Movie Info',
};


export async function getMovie(id: string) {
    console.log(`Fetching : ${Date.now()}`)
    const response = await fetch(`${API_URL}/${id}`);
    return response.json()
}


export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id)
    metadata.title = movie.title
    return (<div className={styles.container}>
            <img src={movie.poster_path} className={styles.poster}  alt={movie.title}/>
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p> {movie.overview}</p>

                <a href={movie.homepage} target={"_blank"}> Homepage &rarr;</a>
            </div>
        </div>
    )
}