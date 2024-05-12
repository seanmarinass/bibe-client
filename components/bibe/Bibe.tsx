"use client";

import { Card, IconButton, Avatar, Divider } from "@mui/material";
import { TodoDto } from "@/utils/types";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import clsx from "clsx";

export type BibeProps = {
  avatarUrl: string;
  displayName: string;
  title: string;
  todos: TodoDto[];
  date: string;
};

export function Bibe({
  avatarUrl,
  displayName,
  title,
  todos,
  date,
}: BibeProps) {
  return (
    <Card className="flex p-2 max-h-[15rem] w-full" variant="elevation">
      <div className="flex flex-col w-[40%] justify-between p-[1rem] gap-[0.5rem] items-baseline">
        <div className="flex items-center gap-2">
          <Avatar
            alt={`${displayName} Avatar`}
            src={avatarUrl}
            sx={{ width: 20, height: 20 }}
          />

          <span className="text-xs">{displayName}</span>
          <span className="text-xs">{date}</span>
        </div>

        <h2 className="flex flex-wrap text-xl font-semibold justify-center">
          {title}
        </h2>

        <div className="flex w-full gap-2">
          <IconButton className="p-0">
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton className="p-0">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          </IconButton>

          <IconButton className="p-0">
            <SendOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <Divider orientation="vertical" />

      <div className="flex flex-col flex-grow p-[1rem]">
        <div className="flex flex-col p-[0.5rem] h-full justify-center gap-1">
          {todos.map((todo, index) => {
            return (
              <p
                key={index}
                className={clsx(
                  "text-sm",
                  todo.isCompleted && "line-through text-slate-300"
                )}
              >
                {todo.description}
              </p>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
