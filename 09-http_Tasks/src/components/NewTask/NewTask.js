import { useState } from "react";
import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendNewTask } = useHttp();
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    props.onAddTask({
      id: generatedId,
      text: taskText,
    });
  };
  const enterTaskHandler = async (taskText) => {
    sendNewTask(
      {
        url: "https://react-http-76b78-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
