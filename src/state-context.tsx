import React from 'react';
import { ITodoItem } from './interfaces-and-types';

const StateContext = React.createContext({
  todos: [] as Array<ITodoItem>,
  addTodo: (todo: ITodoItem) => {},
  edit: (id: string, value: string) => {},
  toggle: (id: string, toggler: boolean) => {},
  toggleAll: (toggler: boolean) => {},
  deleteTodo: (id: string) => {},
  clearComplited: () => {},
});

export default StateContext;
