import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'initial'
}))

const ListContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))


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
    <HomeContainer>
      <h1>Lista dei post:</h1>
      <ListContainer>
        <ol>
          {posts?.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`post/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            )
          })}
        </ol>
      </ListContainer>
    </HomeContainer>
  )
}

export default Home;