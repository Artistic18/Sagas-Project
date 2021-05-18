import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { CountUp, CountDown } from './actions/actions';

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <p style={{ fontSize: '30px', fontWeight: 'bold' }}>{count}</p>
      <button
        onClick={() => dispatch(CountUp())}
        style={{ height: '30px', width: '100px' }}
      >
        Count UP
      </button>
      <button
        onClick={() => dispatch(CountDown())}
        style={{ height: '30px', width: '100px' }}
      >
        Count Down
      </button>
    </div>
  );
}

export default App;
