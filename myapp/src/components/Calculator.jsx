import React, { useState } from 'react'
import "./calculator.css"
import { Fa1 } from "react-icons/fa6";
function Calculator() {



  const [value,setValue]=useState("")

const final=()=>{


try {
  setValue(eval(value))
} catch (error) {
  alert(`${error} "you are not allowed to type 0 for begining a number " ` )
}




}





  return (<div className="container">
    <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'></link>
    <div className='main'>
      <input  className='disp'type='text' style={{fontFamily: "Orbitron, sans-serif"}} value={value}></input>
     <div  className='buttoncontainer'  >
    <div> 
  

        <input type="button"className='btn' value="7" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="8" onClick={(e)=>setValue(value +e.target.value)}></input>
         
    <input type="button"className='btn' value="9" onClick={(e)=>setValue(value +e.target.value)}></input>
    <input type="button"className='btn' value="÷" onClick={(e)=>setValue(value +"/")}></input>
    </div>
  
   
       <div> 

  
    
       <input type="button"className='btn' value="4" onClick={(e)=>setValue(value +e.target.value)}></input>
       <input type="button"className='btn' value="5" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="6" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="x" onClick={(e)=>setValue(value + "*")}></input>
    </div>


    <div> 
        <input type="button"className='btn'   value="1" onClick={(e)=>setValue(value +1)}></input>
        <input type="button"className='btn' value="2" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="3" onClick={(e)=>setValue(value +e.target.value)}></input>
        <input type="button"className='btn' value="-" onClick={(e)=>setValue(value +e.target.value)}></input>

    </div>
    <div> 
   

   <input type="button"className='btn' value="0" onClick={(e)=>setValue(value +e.target.value)}></input>
 <input  type="button"className='btn'  style={{fontWeight:'900'}} value="." onClick={(e)=>setValue(value +e.target.value)}></input>
   <input type="button"className='btn' value="+" onClick={(e)=>setValue(value +e.target.value)}></input>
   <input type="button"className='btn' value="="  style={{backgroundColor:'orange',color:'white'}} onClick={(e)=>final()}></input>

</div>



{/* <div> 


<input type="button"className='btn' value="del" onClick={(e)=>setValue(value.slice(0,-1))}></input>

</div>  */}

</div>


    </div></div>
  )
}

export default Calculator