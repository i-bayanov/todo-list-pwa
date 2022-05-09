import React, { PointerEventHandler, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import StateContext from '../state-context';

export default function Footer() {
  const { todos, clearComplited } = useContext(StateContext);
  const todoCount = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className='footer'>
      <span className='todo-count'>
        {todoCount} item{todoCount === 1 ? '' : 's'} left
      </span>
      <ul className='filters'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >All</NavLink>
        </li>
        <li>
          <NavLink
            to='/active'
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >Active</NavLink>
        </li>
        <li>
          <NavLink
            to='/completed'
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >Completed</NavLink>
        </li>
      </ul>
      <button
        className='clear-completed'
        style={{ display: 'block' }}
        onPointerDown={clearComplited as PointerEventHandler}
      >Clear completed</button>
    </footer>
  );
}
