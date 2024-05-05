import { Checkbox } from "@mui/material";

type TodoItemProps = {
  description: string;
};

export function TodoItem({ description }: TodoItemProps) {
  return (
    <div className="flex-grow">
      <Checkbox size="small" />
      <span className="">{description}</span>
    </div>
  );
}
