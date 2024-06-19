'use client';

import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import SmartBar from '@/components/smartBar';
import { useListStore } from './store.board';

const TODO_ITEMS = [
  'AI Fish or Phish',
  'Compile Coral DB',
  'AI Sub Navigation',
  'Server Water Cooling',
  'Whale Song AI',
  'Marine Chatbot',
];

const DONE_ITEMS = ['Dolphin Comm Sim'];

export default function TodoBoard() {
  const TodoItemList = useListStore((s) => s.TodoItem);
  const SetTodo = useListStore((s) => s.SetTodoItem);

  const [todoList, todoItems, setTodoItems] = useDragAndDrop<
    HTMLUListElement,
    string
  >(TODO_ITEMS, {
    group: 'todoList',
  });
  const [doneList, doneItems, setDoneItems] = useDragAndDrop<
    HTMLUListElement,
    string
  >(TodoItemList.length > 0 ? TodoItemList : DONE_ITEMS, {
    group: 'todoList',
  });
  SetTodo(todoItems);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-acqua-soft-white">
      <h1 className="text-3xl font-bold text-acqua-deep-blue my-6">
        Acqua Board
      </h1>
      <SmartBar
        todoItems={TodoItemList}
        doneItems={doneItems}
        setTodoItems={setTodoItems}
        setDoneItems={setDoneItems}
      />
      <div className="flex justify-center items-start gap-8 p-5">
        <ul
          ref={todoList}
          className="bg-acqua-yellow rounded-lg p-4 shadow-md w-80 h-96"
        >
          {TodoItemList.map((todo) => (
            <li className="p-2 bg-white rounded-lg shadow mb-2" key={todo}>
              {todo}
            </li>
          ))}
        </ul>
        <ul
          ref={doneList}
          className="bg-acqua-darker-blue rounded-lg p-4 shadow-md w-80 text-white h-96"
        >
          {doneItems.map((done) => (
            <li
              className="p-2 rounded-lg line-through decoration-acqua-retro-yellow decoration-2 shadow mb-2"
              key={done}
            >
              {done}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
