import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import U_Comments from './U_Comments';


const UserComments = () => {

    const [comment, setComment] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.pid}/comments`)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])

    return (
        <>
            <h2 style={{ margin: '30px' }}>User Comments</h2>
            <div className='user-container'>
                {comment.map(list => <U_Comments key={list.id} commList={list}></U_Comments>)}
            </div>
        </>
    )
}

export default UserComments
