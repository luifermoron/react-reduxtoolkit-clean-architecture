import React,{ useState } from 'react';
import { useTasksDispatch } from './hooks';

export default function AddTask() {
  const [text, setText] = useState<string>('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch!({
          type: 'added',
          id: nextId++,
          text: text,
        });
      }}>Add</button>
    </>
  );
}

let nextId = 3;