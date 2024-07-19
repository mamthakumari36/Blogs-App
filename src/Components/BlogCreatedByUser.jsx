import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BlogCreatedList from './BlogCreatedList';

const BlogCreatedByUser = () => {

    const [blog, setBlog] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.pid}/posts`)
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])

    return (
        <>
            <h2 style={{ margin: '30px' }}>User Blogs</h2>
            <div className='user-container'>
                {blog.map(blogs => <BlogCreatedList key={blogs.id} blogList={blogs}></BlogCreatedList>)}
            </div>
        </>
    )
}

export default BlogCreatedByUser
