import { DateTime } from 'luxon';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateTimeColumn } from '@/core/typeorm/columns';
import { TodoItem } from './todo-item.entity';
import { User } from '../user';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @DateTimeColumn({ update: false })
  createdAt: DateTime;

  @DateTimeColumn()
  updatedAt: DateTime;

  @DateTimeColumn({ default: null })
  deletedAt: DateTime;

  @ManyToOne(() => User, (e) => e.todos)
  @JoinColumn()
  user: User;

  @OneToMany(() => TodoItem, (e) => e.todo)
  @JoinTable()
  items: TodoItem[];

  @BeforeInsert()
  protected beforeInsert() {
    this.createdAt = DateTime.local();
    this.updatedAt = DateTime.local();
    this.deletedAt = null;
  }

  @BeforeUpdate()
  protected beforeUpdate() {
    this.updatedAt = DateTime.local();
  }
}
