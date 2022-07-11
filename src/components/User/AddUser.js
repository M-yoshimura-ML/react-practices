import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [username, setUsername] = useState('');
    // const [age, setAge] = useState('');
    const [error, setError] = useState();

    // const usernameChangeHandler = (event) => {
    //     setUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value);
    // }


    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(nameInputRef.current.value);
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age(non empty value).'
            })
            return;
        }
        if(+enteredAge < 1 ){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age(> 0).'
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        console.log(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onClickOk={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input 
                        id="username" 
                        type="text" 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="text" 
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )

}

export default AddUser;