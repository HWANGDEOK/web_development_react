import useTitle from "./script/useTitle";
import {useState} from 'react';
import './App.css';

function Counter(){
  const [count, setCount] = useState(0);
  useTitle(`당신은 ${count}번 클릭했습니다.`);

  return(
    <>
      <h1>{count}</h1>
      <br/><br/><br/>
      <button onClick={()=>setCount((precount) => precount+1)}>
        증가
      </button>
    </>
  );
}

export default Counter