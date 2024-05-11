"use client";

import { Checkbox, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type TodoItemProps = {
  description: string;
  handleDelete: () => void;
  handleCompletedChange: () => void;
};

export function TodoItem({
  description,
  handleDelete,
  handleCompletedChange,
}: TodoItemProps) {
  return (
    <div className="flex">
      <div className="flex-grow">
        <Checkbox size="small" onChange={handleCompletedChange} />
        <span className="">{description}</span>
      </div>

      <IconButton size="small" onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}
