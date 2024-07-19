import React from 'react'

const U_Comments = ({ commList }) => {
  return (
    <div className="card" style={{width: '25rem'}}>
      <div className="card-body">
        <h5 className="card-title">{commList.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{commList.body}</h6>
      </div>
    </div>
  )
}

export default U_Comments
