import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchMoviesQuery } from "../../services/api";
import { setSearchedFilms } from "../../store/searchedFilmsSlice";
import { Loader } from "../Loader/Loader";
import { Form, SearchInput, SearchLabel, SearchBtn, SearchBox } from "./SearchFilms.styled";

const SearchMovies = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      movie: '',
    },
  });
  
  const [movie, setMovie] = useState('');
  const dispatch = useDispatch();

  const { data: query, error, isLoading } = useSearchMoviesQuery(movie, {
  skip: !movie, 
  });

 useEffect(() => {
    if (query && query.results) {
      dispatch(setSearchedFilms(query.results));
    }
  }, [query, dispatch]);

  const onSubmit = ({ movie }) => {
    setMovie(movie);

    reset();
  };

  const onError = (errors) => {
    console.log("Form Errors:", errors);
  };

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <SearchBox>
        <SearchLabel htmlFor="movie">Search your film</SearchLabel>
        <SearchInput
          type="text"
          id="movie"
          // value={movie}
          placeholder="Search films"
          {...register('movie', { required: true,             
             minLength: {
            value: 3,
            message: "Movie must be at least 3 symbols",
          }
            })}
        />
      </SearchBox>
      <SearchBtn
        type="submit"
      >
        Search
      </SearchBtn>
    </Form>
  );
}

export default SearchMovies;