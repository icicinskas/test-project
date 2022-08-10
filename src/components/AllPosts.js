import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.cars);
      });
  });

  return (
    <div className="grow3 d-flex wrap">
      {posts.map((x, i) => (
        <div key={i} className="box pntr">
          <h3>Model: {x.model}</h3>
          <div>Color: {x.color}</div>
          <h5>Year old: {x.year}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
