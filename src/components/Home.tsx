import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState<Array<{
    id: string;
    title: string;
  }> | null>([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>Lista dei post:</h1>
      <ul>
        {posts?.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`post/${post.id}`}>
                {post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home;