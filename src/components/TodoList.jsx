import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo } from '../storage/actions';
import { markTodo } from '../storage/actions';

const TodoList = ({ todos = [], onRemovePressed, onMarkCompletedPressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem
        key={index}
        todo={todo}
        onRemovePressed ={onRemovePressed}
        onMarkCompletedPressed = {onMarkCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
});

const map = (dispatch) => ({
  onMarkPressed: text => dispatch(markTodo(text)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
