import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementby5, increment, incrementby5 } from './features/counterSlice';
import Form from './features/form';
import Todo from './features/todo';
import { remove } from './features/todoslice';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Color from './features/color';
import { change } from './features/changecolorslice';

function App() {
  const { count, count2 } = useSelector(state => state.salih);
  const dispatch = useDispatch();
  const { name, age } = useSelector(state => state.form);
  const { items } = useSelector(state => state.todo);

  return (
    <BrowserRouter>
      <div>
        <h1>count: {count}</h1>
        <h1>count2: {count2}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementby5())}>Increment by 5</button>
        <button onClick={() => dispatch(decrementby5())}>Decrement by 5</button>
        <Form />
        
        <h1>name: {name}</h1>
        <h1>age: {age}</h1>
        <Todo />

        <div>
          {items.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'black', color: 'red' }}>
              {item.todo} 
              <button type='submit' onClick={() => dispatch(remove(index))}>Delete</button>
            </div>
          ))}
        </div>

        <nav>
          <input type='text' onChange={(e) => dispatch(change({ color: e.target.value }))} /> 
          <Link to='/color'>Go to color</Link>
        </nav>

        <Routes>
          <Route path='/color' element={<Color />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
