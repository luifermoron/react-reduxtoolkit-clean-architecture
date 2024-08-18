import AddTask from '../../components/Tasks/AddTask.tsx';
import TaskList from '../../components/Tasks/TaskList.tsx';
import { TasksProvider } from '../../components/Tasks/TasksContext.tsx';

// This a sample of React Official documentation:
// https://react.dev/learn/scaling-up-with-reducer-and-context

// this example does not use redux toolkit
export default function ReducerContext() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

