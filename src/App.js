import React,{useReducer} from 'react';
import './App.css';
import Button from './components/Button/Button';
import counterReducer from './reducers/counterReducer';
import { onClickHandler } from './utils/clickHandler';
import Count from './components/Count/Count';

const defaultState = {count : 0}
function App() {
  const [state, dispatch] = useReducer(counterReducer,defaultState)
  console.log("count = "+ state.count)

  return (
    <div className="App">
      <header >   
        <h1 className='app-title'>COUNTER APP</h1>
     
      </header>
        <div className='container'>
        <h1 className='count-label'>COUNT</h1>
        <Count value={state.count}/>
        </div>
        <div className='button-container'>
        <Button color='red' title='DECREMENT' onClickHandler={()=>{onClickHandler(dispatch,{type :"DECREMENT"})}}/>
        <Button color='skyblue' title='RESET' onClickHandler={()=>{onClickHandler(dispatch,{type :"RESET"})}}/>
        <Button color='green'  title='INCREMENT' onClickHandler={()=>{onClickHandler(dispatch,{type :"INCREMENT"})}}/>
    
        </div>
    </div>
  );
}

export default App;
