import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '20px',
  }));
  
  const BackLink = styled(Link)(() => ({
    backgroundColor: 'grey',
    color: 'white',
    padding: '14px 25px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block'
  }));
  
  const TitleContainer = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }));
  
  const PostTitle = styled.h1(() => ({
    margin: '0',
    fontSize: '30px',
    marginBottom: '10px',
    color: 'red',
  }));
  
  const PostBody = styled.p(() => ({
    margin: '0',
    fontSize: '17px',
  }));

function Post() {
    
    const [postDetail, setPostDetail] = useState<any>([]);

    const { id } = useParams();

    const getPostDetail = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();
        setPostDetail(data);
    }

    useEffect(() => {
        getPostDetail()
    }, [])



    return (
        <DetailContainer>
            <BackLink to='/'>Torna alla lista</BackLink>
            <div>
                <h2>Dettaglio post {id}</h2>
                <TitleContainer key={postDetail.id}>
                    <PostTitle>{postDetail.title}</PostTitle>
                    <PostBody>{postDetail.body}</PostBody>
                </TitleContainer>
            </div>
        </DetailContainer>
    )
}

export default Post