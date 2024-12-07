import { useSelector } from "react-redux";
import { favoriteSelector } from "../../store/selectors";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import NotFound from "../NotFound/NotFound";
import { ListBox, List } from "./FavoriteList.styled";

const FavoriteList = () => {
    const favoriteFilms = useSelector(favoriteSelector)
    return <ListBox>  
        <List>
         {favoriteFilms.length > 0 ? favoriteFilms.map((filmData) => 
         <FavoriteItem key={filmData.id} 
                       film={filmData}   
         />) : <NotFound/>}
       </List>
    </ListBox>
}

export default FavoriteList;