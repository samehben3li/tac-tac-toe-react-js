import { useEffect, useState } from "react";
import End from "./pages/End"
import './app.css';
;


function App() {

  const board = [1,2,3,4,5,6,7,8,9]
  const [cells,setCells] = useState([1,2,3,4,5,6,7,8,9])
  const [x_play,setX_play] = useState([])
  const [o_play,seto_play] = useState([])
  const [tour,setTour] = useState("x")
  const [result,setResult] = useState("")

  const handleClick=(c)=>{
    if(cells.includes(c)){
      setCells(cells.filter(i=>i!==c))
      if(tour==="x"){
        setX_play([...x_play,c])
        setTour("o")
      }else{
        seto_play([...o_play,c])
        setTour("x")
      }
    }
  }

  useEffect(()=>{

    if (x_play.includes(1&&2&&3)||x_play.includes(4&&5&&6)||x_play.includes(7&&8&&9)||
    x_play.includes(1&&4&&7)||x_play.includes(2&&5&&8)||x_play.includes(3&&6&&9)||
    x_play.includes(1&&5&&9)||x_play.includes(3&&5&&7)){
      setResult("X's Win !")
    }
    if(o_play.includes(1&&2&&3)||o_play.includes(4&&5&&6)||o_play.includes(7&&8&&9)||
    o_play.includes(1&&4&&7)||o_play.includes(2&&5&&8)||o_play.includes(3&&6&&9)||
    o_play.includes(1&&5&&9)||o_play.includes(3&&5&&7)){
      setResult("O's Wins !")
    }
    if(cells.length===0){
      setResult("Draw !")
    }
  },[x_play,o_play,cells])

  return (
    result==="" 
    ?<div className={tour==="x" ?"board x": "board o"}>
      { board.map((c)=>{
        return <div className={ x_play.includes(c)?"cell x" : o_play.includes(c)? "cell o": "cell" }
        onClick={()=>{handleClick(c)}} 
        key={c}>{c}</div>
      }) }
      </div>
    : <End result={result} setResult={setResult} x_play={x_play} />
  )
}

export default App; 
