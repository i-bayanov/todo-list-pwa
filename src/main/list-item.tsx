import React, { KeyboardEvent, useContext, useState } from 'react';
import { ITodoItem } from '../interfaces-and-types';
import StateContext from '../state-context';

export default function ListItem(props: ITodoItem) {
  const [isEdited, setIsEdited] = useState<boolean>(false);

  const { edit, toggle, deleteTodo } = useContext(StateContext);

  const handleIfEnterPressed = (e: KeyboardEvent) => {
    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
  };

  const EditTodo = () => (
    <input
      className='edit'
      defaultValue={props.title}
      autoFocus
      onBlur={(e) => {
        const input = e.target;
        if (input.value !== props.title) edit(props.id, input.value);
        setIsEdited(false);
      }}
      onKeyDown={handleIfEnterPressed}
    />
  );

  const classNames = [
    props.completed ? 'completed' : '',
    isEdited ? 'editing' : '',
  ].join(' ');

  return (
    <li
      {...{ 'data-id': props.id }}
      className={classNames}
      onDoubleClick={() => setIsEdited(true)}
    >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          onChange={(e) => toggle(props.id, e.target.checked)}
          checked={props.completed}
        />
        <label>{props.title}</label>
        <button
          className='destroy'
          onPointerDown={() => deleteTodo(props.id)}
        ></button>
      </div>
      {isEdited && <EditTodo />}
    </li>
  );
}
