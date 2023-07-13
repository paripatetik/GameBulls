import { useState } from "react";

import bullIcon from '../img/bull_icon.png';
import cowIcon from '../img/cow_icon.png';

export default function Move({num, moves, setMoves, setWin, key, clear, setClear, empty, setEmpty}) {
  const [isActive, setActive] = useState(false);  
  const [value, setValue] = useState(''); 
  const [isSend, setSend] = useState(false); 
  const [values, setValues] = useState([0, 0]) 
 

  function handleChange(e){
    e.target.value = e.target.value.replace(/[^\d]/g,'');
    let arr = e.target.value.split('');
    let set = new Set(arr);
    e.target.value = [...set].join('');
    setValue(e.target.value);
    if(e.target.value.length==4) setActive(true);
    else setActive(false);
  }
  function handleSubmit(e){
    e.preventDefault();
    if(!clear) setSend(true);
    if(clear) setValues([0, 0]);
    check(value);
    if(value==num){
      setWin(true);
      return;
  }
    setClear(false)
    if(moves.length==1){
      setMoves([value, ''])
    } else {
      setMoves([...moves.filter(elem=>{
      return elem !=''
      }), value, '']);
    } 
  }

  function check(v){
    let vArr = v.split('');
    let nArr = num.toString().split('');
    vArr.forEach((elem,index)=>{
        if(elem == nArr[index]) setValues([++values[0], values[1]]);
    });
    for(let i =0; i<vArr.length; i++){
        for(let j =0; j<nArr.length; j++){
            if(i==j) continue;
            if(vArr[i]==nArr[j]) {
                setValues([values[0], ++values[1]]);
                continue;
            }
        }
    }
    if(values[0] == '0' && values[1]== '0'){
      if(empty.length==0) setEmpty(vArr);
      else setEmpty([...empty, ...vArr])
    }
  }
  return (
        <form className="move__form active" onSubmit={handleSubmit} key={key}>
        <input
          maxLength="4"
          className='move__input'
          type="text"
          readOnly={isSend && !clear}
          onChange={handleChange}
          />
          
        {!isSend || clear ? <button type='submit' disabled={!isActive} className={!isActive ? "game__continue" : "game__continue active"}>Cпробувати</button>
          :
          <div className="move__info">
          <p>Бики: {[...Array(values[0])].map((e, i) => <img className='move__icon' src={bullIcon} key={i}/>)}</p>
          <p>Корови: {[...Array(values[1])].map((e, i) => <img className='move__icon' src={cowIcon} key={i}/>)}</p>  
        </div>
          }
          </form>
  )
}