import React, { useContext } from 'react';
import ListItem from './list-item';
import Footer from './footer';
import StateContext from '../state-context';

export default function Main({ filter }: {filter: number}) {
  const { todos, toggleAll } = useContext(StateContext);
  const filteredTodos = todos.filter((todo) => ([true, !todo.completed, todo.completed][filter]));

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => toggleAll(e.target.checked)}
        checked={filteredTodos.every((todo) => todo.completed)}
      />
      <label htmlFor="toggle-all">Mark all as completed</label>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => <ListItem
          key={todo.id}
          {...todo}
        />)}
      </ul>
      <Footer />
    </section>
  );
}
