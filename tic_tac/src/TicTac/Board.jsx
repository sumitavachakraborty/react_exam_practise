import React, { useState } from 'react'
import Square from './Square'


const Board = () => {
  const [value,setValue] = useState(Array(9).fill(null))
  const [isTurnX,setIsTurnX] = useState(false);
  
  const findWinner = () => {
    const winnerId = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i of winnerId){
      const [a,b,c] = i;
      if(value[a]!=null && value[a]===value[b] || value[a]===value[c])
        return value[a];
    }
    return false;
  }

  const winner = findWinner();


  const handleClick = (id)=>{
    if(value[id]!==null)
      return;

    const copyState = [...value]
    copyState[id] = isTurnX ? 'X':'O';
    setValue(copyState);
    setIsTurnX(!isTurnX);
  }
  const handleReset = ()=>{
    setValue(Array(9).fill(null));
  }

  return (
    <div className='box'>
      { 
        winner ? (
        <>
          <h1>{winner} won the Game</h1>
          <button onClick={handleReset}>restart</button>
        </>):(
          <div className='box__container'>
            <div className="box__row">
              <Square value={value[0]} onClick={()=>handleClick(0)}/>
              <Square value={value[1]} onClick={()=>handleClick(1)}/>
              <Square value={value[2]} onClick={()=>handleClick(2)}/>
            </div>
            <div className="box__row">
              <Square value={value[3]} onClick={()=>handleClick(3)}/>
              <Square value={value[4]} onClick={()=>handleClick(4)}/>
              <Square value={value[5]} onClick={()=>handleClick(5)}/>
            </div>
            <div className="box__row">
              <Square value={value[6]} onClick={()=>handleClick(6)}/>
              <Square value={value[7]} onClick={()=>handleClick(7)}/>
              <Square value={value[8]} onClick={()=>handleClick(8)}/>
            </div>
          </div>)
      }
    </div>
    
  )
}

export default Board