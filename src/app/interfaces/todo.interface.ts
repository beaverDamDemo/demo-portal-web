export interface Todo {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

export interface CreateTodoDto {
  name: string;
  description: string;
  completed?: boolean;
}
