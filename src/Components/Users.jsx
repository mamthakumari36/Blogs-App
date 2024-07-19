import React from 'react'
import { Link } from 'react-router-dom'

const Users = ({ user }) => {
    return (
            <div className="card user-list" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <Link to={`/users/${user.id}`}>View Details</Link><br />
                    <Link to={`/users/${user.id}/comments`}>View Comments</Link>
                </div>
            </div>
    )
}

export default Users
