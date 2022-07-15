import React from 'react';

function End({result,setResult,x_play}) {
  console.log(x_play);
  return (
  <div className='end'>
      <span className="msg">{ result }</span>
      <button className="restart" onClick={()=>setResult("")}>restart</button>
  </div>);
}

export default End;
