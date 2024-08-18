import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';

export function useTasks() {
    return useContext(TasksContext);
}
  
export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
}