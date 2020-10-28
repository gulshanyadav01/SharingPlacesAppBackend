import React from "react"
// import { Router } from "react-router-dom"

import UserList from "../components/UsersList"

const Users = () => {
    const   USERS = [
        {id: "u1", name: "gulshan yadav", image: "https://www.placecage.com/200/300", places: 3}
    ];
    return (
       <UserList
           items = { USERS }
       />
    )
}

export default Users;