import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class TodoResponse {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}

export class CreateTodoBody {
  @IsNotEmpty()
  @IsString()
  title: string;
}

export class TodoParams {
  @IsNotEmpty()
  @IsNumber()
  todoId: number;
}

export class TodoItemResponse {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  done: boolean;

  @Expose()
  createdAt: string;

  @Expose()
  updatedAt: string;
}

export class CreateTodoItemBody {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
