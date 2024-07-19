import React, { useContext } from 'react'
import Users from './Users'
import { AllDataLists } from '../Store/Blog-list-store'

const UserList = () => {

    const { userdataList } = useContext(AllDataLists)

    return (
        <>
            <h1 style={{ margin: '30px' }}>Users</h1>
            <div className="user-container">
                {userdataList.map((list, i) => <Users key={i} user={list}></Users>)}
            </div>
        </>
    )
}

export default UserList
