"use client";

import {
  Button,
  Card,
  CardContent,
  TextField,
  IconButton,
  Modal,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { TodoItem } from "@/components/bibe/TodoItem";
import CloseIcon from "@mui/icons-material/Close";
import { BibeDto, TodoDto } from "@/utils/types";
import { useUserContext } from "@/context/UserContext";

export function CreateBibe() {
  const { user, setHasPostedDailyBibe } = useUserContext();

  const [title, setTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoList, setTodoList] = useState<TodoDto[]>([]);

  const handleAddTodo = () => {
    const hasTodo = todoDescription.length > 0;

    if (hasTodo) {
      const newTodo: TodoDto = {
        description: todoDescription,
        isCompleted: false,
      };

      const updatedTodoList = todoList;
      updatedTodoList.push(newTodo);
      setTodoList(updatedTodoList);

      setTodoDescription("");
    }
  };

  const handleDelete = (index: number) => {
    setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));
  };

  const updateTodoList = (index: number) => {
    const updatedTodoList: TodoDto[] = todoList;
    const todoToUpdate: TodoDto = updatedTodoList[index];
    const completedStatus = todoToUpdate.isCompleted;
    todoToUpdate.isCompleted = !completedStatus;

    updatedTodoList[index] = todoToUpdate;
    console.log(JSON.stringify(updatedTodoList, null, 2));
    setTodoList(updatedTodoList);
  };

  const handlePost = () => {
    const date = new Date();
    const bibe: BibeDto = {
      userId: user.userId,
      title,
      todos: todoList,
      date,
    };

    setHasPostedDailyBibe(true);
  };

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      open={modalIsOpen}
      className="flex flex-col justify-center items-center"
    >
      <Card className="flex flex-col justify-evenly border-2 shadow-none border-slate-800 p-5 min-w-[30rem] relative">
        <div className="flex w-full">
          <IconButton
            size="small"
            aria-label="close"
            className="absolute top-0 right-0"
            onClick={handleCloseModal}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col w-full">
          <CardContent className="flex p-0">
            <div className="flex gap-4 w-full">
              <AccountCircleIcon fontSize="large" />
              <TextField
                variant="standard"
                className="flex flex-grow"
                placeholder="Today's Bibe Title"
                size="medium"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </CardContent>
        </div>

        <div className="w-full flex flex-col">
          <CardContent className="flex p-0">
            <div className="flex gap-4 w-full">
              <TextField
                variant="outlined"
                className="flex w-full justify-center"
                placeholder="Add your todos"
                size="small"
                value={todoDescription}
                onChange={(event) => setTodoDescription(event.target.value)}
              />

              <Button
                variant="contained"
                className="shadow-none"
                size="small"
                onClick={handleAddTodo}
              >
                Add
              </Button>
            </div>
          </CardContent>
        </div>

        {todoList.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              description={todo.description}
              handleDelete={() => handleDelete(index)}
              handleCompletedChange={() => updateTodoList(index)}
            />
          );
        })}

        <Button
          variant="contained"
          className="shadow-none mt-[1rem]"
          disabled={title.length < 1 || todoList.length < 1}
          onClick={handlePost}
        >
          Post
        </Button>
      </Card>
    </Modal>
  );
}
