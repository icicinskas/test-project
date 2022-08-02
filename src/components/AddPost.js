import { useRef } from "react";

const AddPost = ({ setPosts }) => {
  const imgRef = useRef();
  const titleRef = useRef();
  const locRef = useRef();
  const userRef = useRef();
  const descRef = useRef();

  function send() {
    const post = {
      image: imgRef.current.value,
      title: titleRef.current.value,
      location: locRef.current.value,
      username: userRef.current.value,
      description: descRef.current.value,
    };

    const option = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    };

    fetch("http://localhost:4000/addPost", option)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPosts(data.posts);
      });
  }

  return (
    <div className="grow1 d-flex fl-col a-c g10">
      <h1>Labas</h1>
      <input ref={imgRef} type="text" placeholder="Input image url" />
      <input ref={titleRef} type="text" placeholder="Enter title" />
      <input ref={locRef} type="text" placeholder="Enter location" />
      <input ref={userRef} type="text" placeholder="Enter username" />
      <input ref={descRef} type="text" placeholder="Enter description" />

      <button onClick={send}>Add Postt</button>
    </div>
  );
};

export default AddPost;
