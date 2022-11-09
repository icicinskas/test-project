import React from "react";
import { useContext } from "react";
import MainContext from "../context/MainContext";

const Modal = () => {
  const { tickets, user, setModal } = useContext(MainContext);

  const freeSeats = tickets.filter((x) => tickets.reserved !== "");

  const reserved = async () => {
    const seats = {
      seat: tickets.reserved,
      color: "",
    };

    console.log(freeSeats.place);
  };

  return (
    <div className="modal">
      <div>{}</div>
      <div className="closeIcon d-flex j-right" onClick={() => setModal(false)}>
        <img
          src="https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png"
          alt=""
        />
      </div>
      <div className="d-flex">
        <div className="grow3 d-flex flex-column">
          <div className="user">
            <b>{user.username}</b>: {user.cash}€
          </div>

          <div className="seats d-flex flex-wrap g10 m10">
            {freeSeats.map((x, i) => (
              <div onClick={reserved} key={i} className="seat">
                {x.place}
              </div>
            ))}
          </div>
        </div>

        <div className="ticket grow1 d-flex flex-column">
          <div>Places selected:</div>
          <div>{}</div>
          <div>Price: 7.99€</div>
          <button>Buy tikets</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
