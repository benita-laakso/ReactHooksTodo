import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import './styles.css';

const App = () => {
  const [todos, setTodos] = useState([]); //Space list
  return (
    <div className="App"/>
  );
};
{}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
