import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type listType = {
  TodoItem: string[];
  SetTodoItem: (list: string[]) => void;
  DoneItem: string[];
  SetDoneItem: (list: string[]) => void;
};

export const useListStore = create<listType>()(
  persist(
    (set) => ({
      TodoItem: [],
      SetTodoItem: (list: string[]) =>
        set(() => ({
          TodoItem: list,
        })),
      DoneItem: [],
      SetDoneItem: (list: string[]) =>
        set(() => ({
          DoneItem: list,
        })),
    }),
    {
      name: 'saved-lists',
    },
  ),
);
