import React from "react";
import { useContext } from "react";
import MainContext from "../context/MainContext";

const Modal = () => {
  const { tickets, user, setModal } = useContext(MainContext);

  const http = async (url, data) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("http://localhost:4000" + url, options);
    return res.json();
  };

  const reserved = async () => {
    const seats = {
      place: tickets.reserved,
      color: "",
    };

    console.log("tickets.place");
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

          <div className="d-flex flex-wrap g10">
            {tickets.map((x, i) => (
              <div onClick={reserved} key={i} className="seat">
                {x.place}
              </div>
            ))}
          </div>
        </div>

        <div className="ticket grow1 d-flex flex-column">
          <div>Places selected:</div>
          <div>{}</div>
          <div>Price:</div>
          <div>{}</div>
          <button>Buy tikets</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
