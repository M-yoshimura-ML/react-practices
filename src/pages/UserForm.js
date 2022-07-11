import AddUser from "../components/User/AddUser";
import UserList from "../components/User/UserList";
import { useState } from "react";

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
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </div>
    )
}

export default UserForm;
