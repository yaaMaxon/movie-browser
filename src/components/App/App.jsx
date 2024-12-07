import { Route, Routes,  } from "react-router-dom";
import Home from '../../views/Home';
import FavoriteFilms from "../../views/FavoriteFilms";
import MovieDetails from "../MovieDetails/MovieDetails";
import { MainBox, Header, HeaderList, StyledNavLink } from "./App.styled";

const App = () => {

  return (
    <MainBox>
      <Header>
      <HeaderList>
        <StyledNavLink  
        to="/"
        >Home
        </StyledNavLink>
        <StyledNavLink  
        to="/favorite"
        >Favorite
        </StyledNavLink>
      </HeaderList>
      </Header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<FavoriteFilms />} />
          {/* <Route path='/movies' element={<SearchMovie />} /> */}
          <Route path='/movies/:movieId/*' element={<MovieDetails />} />
        </Routes>
      </main>
    </MainBox>
  )
}

export default App;
