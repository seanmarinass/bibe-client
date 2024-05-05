"use client";

import {
  Button,
  Card,
  CardContent,
  TextField,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";
import { TodoItem } from "@/components/bibe/TodoItem";
import CloseIcon from "@mui/icons-material/Close";
import { AltRoute } from "@mui/icons-material";

type Bibe = {
  title: string;
  todoList: string[];
};

export function CreateBibe() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleAddTodo = () => {
    const hasTodo = todo.length > 0;

    if (hasTodo) {
      const newTodoList = todoList;
      newTodoList.push(todo);
      setTodoList(newTodoList);
      setTodo("");
    }
  };

  const handleDelete = (index: number) => {
    setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));
  };

  const handlePost = () => {
    const bibe: Bibe = {
      title,
      todoList,
    };

    alert(JSON.stringify(bibe, null, 2));
  };

  return (
    <Card className="flex flex-col justify-evenly min-w-[35rem] border-2 shadow-none border-slate-800 p-5">
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
              value={todo}
              onChange={(event) => setTodo(event.target.value)}
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
          <div key={index} className="flex">
            <TodoItem description={todo} />

            <IconButton size="small" onClick={() => handleDelete(index)}>
              <CloseIcon />
            </IconButton>
          </div>
        );
      })}

      <Button
        variant="contained"
        className="shadow-none mt-[1rem]"
        disabled={title.length < 1}
        onClick={handlePost}
      >
        Post
      </Button>
    </Card>
  );
}
