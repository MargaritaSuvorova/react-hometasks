import { useState } from "react";
import style from './styles.module.css';


export const HomeWork1 = () => {
  const [number, setNumber] = useState<number>(1);

  const runHandler = () => {
    const calcNumber = Math.floor( Math.random() * 6 ) + 1;
    setNumber(calcNumber);
  };

  return <div>
    <h3>Решение домашнего задания №1</h3>
    <div className={style.cube}>{number}</div>
    <button onClick={runHandler}>Run</button>
  </div>;
};
