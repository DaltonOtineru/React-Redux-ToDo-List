import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';

import TodosForm from '../TodoList/TodosForm';

const App = () => {
  return (
    <div className="app">
      <div className="app--container">
        <Header />
        <TodosForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
