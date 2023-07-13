import { useState } from 'react';
import Banner from './jsx/banner.jsx';
import Game from './jsx/game.jsx';
import '../src/scss/style.scss';

function App() {
 
  const [start, setStart] = useState(false);
  return (
    <>
      <Banner start={start} setStart={setStart}/>
      {start && <Game start={start} setStart={setStart}/>}
    </>
  )
}

export default App;
