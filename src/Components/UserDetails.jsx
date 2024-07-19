import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UserDetails = () => {

    const [details, setDetails] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.pid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div>
            <h2 style={{margin:'30px 40px'}}>{details.name}</h2>
            <div className="card blogs-card" style={{ width: '40rem' }}>
                <div className="card-body">
                    <p className="card-title"> <b>Username</b> : {details.username}</p>
                    <p className="card-title"><b>Email</b> : {details.email}</p>
                    <p className="card-title"><b>Phone</b> : {details.phone}</p>
                    <p className="card-title"><b>Website</b> : {details.website}</p>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
