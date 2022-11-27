import { DateTimeToString } from '@/common';
import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class TodoResponse {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  @DateTimeToString()
  createdAt: string;

  @Expose()
  @DateTimeToString()
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

export class TodoItemParams extends TodoParams {
  @IsNotEmpty()
  @IsNumber()
  itemId: number;
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
  @DateTimeToString()
  createdAt: string;

  @Expose()
  @DateTimeToString()
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

export class UpdateTodoItemDoneBody {
  @IsNotEmpty()
  @IsBoolean()
  done: boolean;
}
