import React from 'react'

const BlogCreatedList = ({blogList}) => {
  return (
    <div className="card" style={{width: '25rem'}}>
    <div className="card-body">
      <h5 className="card-title">{blogList.title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{blogList.body}</h6>
    </div>
  </div>
  )
}

export default BlogCreatedList;
