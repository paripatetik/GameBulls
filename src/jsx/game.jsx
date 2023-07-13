import { useState } from 'react';
import Move from './move';
import Digits from './digits';

export default function Game({setStart}) {
  const [num, setNum] = useState(
   generate()
  );
  function generate (){
    let arr = [];
      while(arr.length<4){
       let num = Math.floor(Math.random()*9);
      if(arr.every(elem => elem !== num)) arr.push(num);
      }
     return arr.join('')
    }
  
  const [clear, setClear] = useState(false)
  const [moves, setMoves] = useState(['']);
  const [isWin, setWin] = useState(false);
  const [empty, setEmpty] = useState([])
  
  function onAgain(){
    setNum(generate());
    setWin(false);
    setMoves(['']);
    setClear(true);
    setEmpty([]);
  }

  return (
  
    <div className="game">
      <h1 className="game__title title">Bulls and Cows</h1>
      <h2 className={isWin ? "game__body active": "game__body"}> {num} </h2>
        <div className="game__content">
            <div className="game__moves">
             {moves.map((elem, index)=> (
                <Move clear={clear} setClear={setClear} key={index} num={num} moves={moves} setMoves={setMoves} isWin={isWin} setWin={setWin} empty={empty} setEmpty={setEmpty}/>
              ))}
            </div>
            <Digits empty={empty} setEmpty={setEmpty}/>
        </div>
        {isWin && 
      <div className="move__over">Гру завершено 
      {moves.length==1 ? <p>Тобі знадобилася 1 спроба. Ти чесно грав?</p>: 
                         <p>Тобі знадобилося {moves.length} ходів</p>}
      </div>}
      <div className="game__btns">
        <button className="game__again btn" onClick={onAgain}> Почати знову</button>
        <button className="game__end btn" onClick={()=>setStart(false)}>Закінчити гру</button>
      </div>
    </div>
   
  )
}

