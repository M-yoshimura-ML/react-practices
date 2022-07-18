// sec 8: practice project
// url: /user
//feature: validation, ErrorModal
import AddUser from "../components/User/AddUser";
import UserList from "../components/User/UserList";
import { useState } from "react";
import React from "react";

const UserForm = () => {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList, 
                { name:uName, age:uAge, id:Math.random().toString() },
            ];
        })
    }

    return (
        <React.Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </React.Fragment>
    )
}

export default UserForm;
