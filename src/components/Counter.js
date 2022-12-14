import classes from './Counter.module.css';
import { useSelector, useDispatch} from "react-redux"
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const counterVisible = useSelector(state => state.counter.counterVisible);
  
  const incrementHandler = (amount) => {
    dispatch(counterActions.increment(amount));
  }

  const decrementHandler = (amount) => {
    dispatch(counterActions.decrement(amount));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterVisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => {incrementHandler(1)}}>Increment</button>
        <button onClick={() => {incrementHandler(5)}}>Increment By 5</button>
        <button onClick={() => {decrementHandler(1)}}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
