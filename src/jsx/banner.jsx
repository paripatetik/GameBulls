import { useState } from "react"
import useSound from 'use-sound';
import sound from '../audio/moo.mp3';

import backImg from '../img/backgeound.jpg';
import cowImg from '../img/cow.png';
import bullImg from '../img/bull.png';

export default function Banner({start, setStart}) {
 
  const [modal, setModal] = useState(false);
  const [play] = useSound(sound);

  function handleStart(){
    setStart('true');
    play();
  }
  return (
    <div className={`banner ${start ? "started" : ""}`}>
        <img className='banner__bull' src={bullImg} alt="bull"/>
        <img className='banner__cow' src={cowImg} alt="cow"/>
        <img className='banner__background' src={backImg} alt="background"/>
        <div className="banner__content">
      
          <h1 className="banner__title title">Bulls and Cows</h1>
          <button disabled={true} className="start__btn btn">Грати вдвох (в розробці)</button>
          <button className="start__btn btn" onClick={handleStart}>Грати одному</button>
          <button className="more__btn" onClick={()=> setModal(true)}>Правила гри</button>
        </div>
   
        <div className={modal ? "banner__modal active": "banner__modal"}>
          <div className="modal__top">
            <h1 className="modal__title">Правила гри</h1>
            <button className="modal__close" onClick={()=> setModal(false)}></button>
          </div>
          <div className="modal__text">
          <p><span className="name">Бики та корови</span> (також відома як Корови та бики, Свині та бики) — логічна гра, призначена для двох гравців, в основі якої закладено вгадування числа, задуманого суперником.</p>
          <p>Задумується чотиризначне число. Всі цифри повинні бути різними. Тоді ж, в свою чергу, гравець намагаєся вгадати загадане число. Гравець пропонує свій варіант, а опонент дає кількість збігів. Якщо збігається цифра в її правильній позиції, то це є «бик», якщо не в своїй позиції — це «корова». Можна грати і з другом, і самому (але з другом цікавіше). Виграє той, хто швидше розшифрує число (з комп &apos;ютером гра триватиме, поки число не розгадане)</p>
          <p>Приклад ходу
            <br/>
            Задумане число: <span className="blue">4</span><span className="red">2</span>7<span className="blue">1</span>
            <br/>
            Спроба суперника: <span className="blue">1</span><span className="red">2</span>3<span className="blue">4</span>
            <br/>
            Відповідь: 1 бика і 2 корови (бик &apos;2 &apos;, а корови -  &apos;4 &apos; і  &apos;1 &apos;)
          </p>
          </div>
        </div>
    </div>
  )
}