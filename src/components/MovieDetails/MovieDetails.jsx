import { useParams, useNavigate } from "react-router-dom";
import { useGetMovieDetailsQuery } from "../../services/api";
import { Loader } from "../Loader/Loader";
import NoImg from '../../../public/no_img.png';
import NotFound from "../NotFound/NotFound";
import { MainBox, 
        GoBack, 
        DetailsBox, 
        Poster,
        Title, 
        SubTitle, 
        Overview, 
        Genre  } from "./MovieDetails.styled";

const MovieDetails = () => {
    const BASE_URL = 'https://image.tmdb.org/t/p/w300';
    const navigate = useNavigate()
    const {movieId} = useParams()
    const { data: movieDetails, error, isLoading } = useGetMovieDetailsQuery(movieId);

    const handleBackBtn = () => {
        navigate(-1)
    }   


    if (isLoading) {
        return <Loader/>;
    }

    if (error) {
        return <p>Error, try later...</p>;
    }

    if (!movieDetails) {
        return <NotFound/>;
    }

    const { 
        title, 
        poster_path, 
        vote_average, 
        overview, 
        genres 
    } = movieDetails;

    return  <MainBox>
        <GoBack 
         type="button"
         onClick={handleBackBtn} 
        >
            Go Back
        </GoBack>
      <DetailsBox>
        <Poster 
            src={poster_path !== null ? BASE_URL + poster_path : NoImg} 
            alt={title}
        />
        <div>
           <Title>{title}</Title>
            <SubTitle>User score: {vote_average}</SubTitle>
            <SubTitle>Overview</SubTitle>
            <Overview>{overview}</Overview>
            <SubTitle>Genres</SubTitle>
            <Genre>
            {genres?.map((genre) => {
                return genre.name;
            }).join(', ')}
        </Genre>
        </div>
    </DetailsBox>
</MainBox>
    
}

export default MovieDetails;
