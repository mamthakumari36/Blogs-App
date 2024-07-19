import React, { useContext } from 'react'
import Blogs from './Blogs'
import { AllDataLists } from '../Store/Blog-list-store'

const BlogLists = () => {

    const {blogDataList} = useContext(AllDataLists)

    return (
        <>
            <h2 style={{ margin: '25px 90px' }}>List of Blogs</h2>
            {blogDataList.map((list) => <Blogs key={list.id} blog={list}></Blogs>)}
        </>
    )
}

export default BlogLists
