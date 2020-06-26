import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { selectTodosFiltered } from './store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { todoDelete, todoUpdate, todoFetch } from './store/actions';


function TodoList({ items = [], onDelete = () => {}, onChange = () => {}, onLoad = () => {} }) {
  // equivalent componentDidMount (+ componentDidUpdate sans tableau) (+componentWillUnmout avec une fonction de retour) avec les hooks
  useEffect(() => {
    // console.log('effect')
    onLoad();
    // return () => {
    //   // componentWillUnmout
    // }
  }, []);

  return (
    <div className="TodoList">
      {items.map((it) => (
        <TodoItem
          key={it.id}
          item={it}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

function TodoListContainer() {
  const items = useSelector(selectTodosFiltered);
  const dispatch = useDispatch();

  function onDelete(todo) {
    dispatch(todoDelete(todo));
  }

  function onChange(todo) {
    dispatch(todoUpdate(todo));
  }

  function onLoad() {
    dispatch(todoFetch());
  }

  return <TodoList items={items} onDelete={onDelete} onChange={onChange} onLoad={onLoad} />;
}

export default TodoListContainer;
