  import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useGetTrendMoviesQuery } from "../../services/api";
import { selectSearchedFilms } from "../../store/selectors";
import MovieItem from "../MovieItem/MovieItem";
import { Loader } from "../Loader/Loader";
import { animateScroll as scroll } from "react-scroll";
import { List, ListBox, LoadMore, ScrollBtn } from "./MoviesList.styled";

const MoviesList = () => {
  const [page, setPage] = useState(1);
  const { data: movies, isLoading, error } = useGetTrendMoviesQuery(page);
  const searchedMovies = useSelector(selectSearchedFilms);

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    if (movies?.results) {
      setAllMovies((prev) => {
        const movieIds = new Set(prev.map((movie) => movie.id)); // Унікальні ID існуючих фільмів
        const newMovies = movies.results.filter((movie) => !movieIds.has(movie.id)); // Додаємо тільки нові
        return [...prev, ...newMovies];
      });
    }
  }, [movies]);

  const handleMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, 
      smooth: true,
    });
  };


  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error, try later...</p>;
  }

  if (!allMovies) {
        return <NotFound/>;
  }

  if (searchedMovies?.length > 0) {
    return (
      <ListBox>
        <List>
          {searchedMovies.map((dataMovie) => (
            <MovieItem key={dataMovie.id} movie={dataMovie} />
          ))}
        </List>
      </ListBox>
    );
  }

  return (
    <ListBox>
      <List>
        {allMovies.map((dataMovie) => (
          <MovieItem key={dataMovie.id} movie={dataMovie} />
        ))}
      </List>
      {movies?.page < movies?.total_pages && (
        <LoadMore type="button" onClick={handleMoreMovies}>
          Load more
        </LoadMore>
      )}

      <ScrollBtn
        onClick={scrollToTop}
      >
        ⬆
      </ScrollBtn>
    </ListBox>
  );
};

export default MoviesList;


