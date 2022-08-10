import { useRef } from "react";

const AddPost = () => {
  const modelRef = useRef();
  const colorRef = useRef();
  const yearRef = useRef();

  function send() {
    const car = {
      model: modelRef.current.value,
      color: colorRef.current.value,
      year: yearRef.current.value,
    };

    const option = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    };

    fetch("http://localhost:4000/addPost", option)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="grow1 d-flex fl-col a-c g10">
      <h1>Labas</h1>
      <input ref={modelRef} type="text" placeholder="Input car model" />
      <input ref={colorRef} type="text" placeholder="Enter car color" />
      <input ref={yearRef} type="text" placeholder="Enter car prodused year" />

      <button onClick={send}>Add Car</button>
    </div>
  );
};

export default AddPost;
