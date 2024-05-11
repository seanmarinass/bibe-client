export type Link = {
  path: string;
  label: string;
};

export type TodoDto = {
  isCompleted: boolean;
  description: string;
};

export type BibeDto = {
  userId: string;
  title: string;
  todos: TodoDto[];
  date: Date;
};

export type User = {
  userId: string;
  displayName: string;
};
