import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isError, setIsError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError({
        title: "Invalid input",
        message: "Please enter a valid value",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsError({
        title: "Invalid",
        message: "Age must be greater than zero",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => setIsError(null);
  return (
    <>
      {isError && (
        <ErrorModal
          title={isError.title}
          message={isError.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
