import { StatusBar } from 'expo-status-bar';
import Main from './components/Main';
import TodoProvider from './context/TodoProvider';

export default function App() {
  return (
    <TodoProvider>
      <StatusBar style='light' />
      <Main />
    </TodoProvider>
  );
}
