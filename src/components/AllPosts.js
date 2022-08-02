// import { useEffect } from "react";

const AllPosts = ({ posts }) => {
  //   useEffect(() => {
  //     fetch("http://localhost:4000/addPost")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);

  //         setPosts([...posts, data]);
  //       });
  //   });

  console.log(posts);

  return (
    <div className="grow3">
      {posts.map((x) => (
        <div className="box">
          <img style={{ width: "150px" }} src={x.image} alt="img" />
          <h3>{x.title}</h3>
          <div>{x.location}</div>
          <h5>{x.username}</h5>
          <p>{x.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
