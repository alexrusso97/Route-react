import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";



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
        <>
            <Link to='/'>Torna alla lista</Link>
            <div>
                <h2>Dettaglio post {id}</h2>
                <div key={postDetail.id}>
                    <h1>{postDetail.title}</h1>
                    <p>{postDetail.body}</p>
                </div>
            </div>
        </>
    )
}

export default Post