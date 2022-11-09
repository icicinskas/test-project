import { useContext } from "react";
import MainContext from "../context/MainContext";

const Movies = () => {
  const { movies, setOneMovie, user, setModal } = useContext(MainContext);

  const getMovies = movies.filter((x) => x.mpa <= user.age);

  const chooseMovie = () => {
    setModal(true);
    setOneMovie();
  };

  return (
    <div className=" d-flex g20 flex-wrap">
      {getMovies.map((x, i) => (
        <div onClick={chooseMovie} className="movie" key={i}>
          <img src={x.image} alt="img" />
          <div className="title">
            <h2>{x.titleLtu}</h2>
            <div>
              MPA rating: <b>{x.mpa}</b>
            </div>
            <h4 className="seats">Seats: 5 /out of 30</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
