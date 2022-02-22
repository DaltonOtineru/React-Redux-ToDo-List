import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

const App = () => {
  return (
    <div className="app">
      <div className="app--container">
        <Header />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
