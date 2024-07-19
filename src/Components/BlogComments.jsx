import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BlogComments = () => {

    const [comment, setComment] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.pid}/comments`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    return (
        <>
            <h2 style={{ margin: '30px' }}>Comments</h2>
            <div className="card blogs-card" style={{ width: '40rem' }}>
                <p>{comment.email}</p>
                {comment.map(post => {
                    return <div key={post.id} className="card-body">
                        <p className="card-title">{post.body}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default BlogComments;
