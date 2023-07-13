export default function Digits({empty}) {
    function handleClick(e){
        e.target.classList.toggle('active');
    }
   
  return (
    <div className="game__digits"> 
        {empty.length > 0 ? [...Array(10)].map((e, i) => {
         for(let index = 0; index<empty.length; index++){
            if(empty[index]==i){
                return <button className="game__digit-active" key={i}>{i}</button>
            }
         }
            return <button className="game__digit" key={i} onClick={handleClick}>{i}</button>
        }): 
        [...Array(10)].map((e, i) => <button className="game__digit" key={i} onClick={handleClick}>{i}</button>)}
  
    </div>
  )
}