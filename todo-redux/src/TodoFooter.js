import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectItemsLeft } from "./store/selectors";
import { todoFilterChange } from './store/actions';

function TodoFooter({ itemsLeft = 0, filter= 'All', onFilterChange = () => {}}) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div className="TodoFooter">
      <span>{itemsLeft} items left</span>
      {
        filters.map((f) => (
          <button key={f} disabled={f === filter} onClick={() => onFilterChange(f)}>{f}</button>
        ))
      }
    </div>
  );
}

function TodoFooterContainer() {
  const itemsLeft = useSelector(selectItemsLeft);
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch();

  function onFilterChange(f) {
    dispatch(todoFilterChange(f))
  }

  return <TodoFooter itemsLeft={itemsLeft} filter={filter} onFilterChange={onFilterChange} />
}

export default TodoFooterContainer;