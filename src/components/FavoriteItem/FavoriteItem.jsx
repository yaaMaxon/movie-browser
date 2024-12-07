import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFilmFromFavorite } from "../../store/favoriteSlice";
import { FaHeart } from "react-icons/fa";
import { Item, Poster, Title, RemoveBtn } from "./FavoriteItem.styled";

const FavoriteItem = ({film}) => {
    const dispatch = useDispatch();

    const BASE_URL = 'https://image.tmdb.org/t/p/w300';
    const { title, poster_path, id} = film;

    const handleRemoveFromFavorite = () => {
        dispatch(removeFilmFromFavorite(id))
    }

    return <Item>
        <Link to={`/movies/${id}`} style={{textDecoration: 'none'}}>  
          <Poster src={poster_path !== null && BASE_URL + poster_path} alt={title} />
          <Title>{title}</Title>
        </Link>
        <RemoveBtn type="button"
                onClick={handleRemoveFromFavorite}
                >
            <FaHeart style={{width: "24", height: "24", color: 'darkred'}}/>
        </RemoveBtn>
    </Item>
}

export default FavoriteItem;