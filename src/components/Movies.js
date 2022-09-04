import { useContext } from "react";
import MainContext from "../context/MainContext";

const Movies = () => {
  const { movies, user, setModal } = useContext(MainContext);

  const getMovies = movies.filter((x) => x.mpa <= user.age);

  return (
    <div className=" d-flex g20 flex-wrap">
      {getMovies.map((x, i) => (
        <div onClick={() => setModal(true)} className="movie" key={i}>
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
