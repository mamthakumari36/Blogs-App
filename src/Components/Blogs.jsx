import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({ blog }) => {

    return (
        <>
            <div className="card blogs-card" style={{ width: '50rem' }}>
                <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.body}</p>
                    <Link to={`/posts/${blog.id}/comments`} className="card-link">View Comments</Link>
                    <Link to={`/users/${blog.id}/posts`} className="card-link">Blogs Created By Users</Link>
                </div>
            </div>
        </>
    )
}

export default Blogs
