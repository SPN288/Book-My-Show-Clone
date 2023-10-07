import { BrowserRouter, Route, Link } from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
import Home from "./pages/homepage";
import MovieHOC from "./HOC/Movie.HOC";
import movie from "./pages/moviepage";
import plays from "./pages/plays.page";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;


function App() {
  return (
  <>
  <DefaultHOC path="/" exact component={Home} />
  <MovieHOC path="/movie/:id" exact component={movie}/>
  <DefaultHOC path="/plays" exact component={plays}/>
  </>
  );
}

export default App;
