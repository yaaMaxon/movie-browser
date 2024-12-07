import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriteSelector } from "../../store/selectors";
import { addFilmToFavorite } from "../../store/favoriteSlice";
import { removeFilmFromFavorite } from "../../store/favoriteSlice";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Item, Poster, Title, ToggleBtn } from "./MovieItem.styled";
import NoImg from '../../../public/no_img.png'
import { BASE_URL } from "../../constants/path";

const MovieItem = ({movie}) => {
    const dispatch = useDispatch()
    const { title, poster_path, id} = movie;

    const favoriteFilms = useSelector(favoriteSelector)
    const currentFilm = favoriteFilms.find(({id: movieId}) => movieId === id) 
    
    const [isFavorite, setFavorite] = useState(currentFilm ? true : false);

    const handleAddToFavorite = () => {
    if (currentFilm) {
        setFavorite(false)
        dispatch(removeFilmFromFavorite(id))
    } else {
        setFavorite(true)
        dispatch(addFilmToFavorite(movie))
    }
    }  

    return <Item>
        <Link to={`/movies/${id}`} style={{textDecoration: 'none'}}>  
          <Poster src={poster_path !== null ? BASE_URL + poster_path : NoImg} alt={title} />
          <Title>{title}</Title>
        </Link>
        <ToggleBtn type="button" 
                onClick={handleAddToFavorite}>
            {!isFavorite ? 
            <FaRegHeart style={{width: "24", height: "24"}}/>
            :
            <FaHeart style={{width: "24", height: "24", color: 'darkred'}}/>}
        </ToggleBtn>
    </Item>
}

export default MovieItem;


