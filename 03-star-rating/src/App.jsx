import {FaStar} from 'react-icons/fa'
import './App.css'
import { useState } from 'react'

function App({noOfStar = 10}) {

  const [rating , setRating] = useState(0)
  const [hover , setHover] = useState(0)

  function handleClick(getCurrentIndex){
    // console.log(getCurrentIndex)
    setRating(getCurrentIndex)
  }
  
  function handleMouseEnter(getCurrentIndex){
    // console.log(getCurrentIndex)
    setHover(getCurrentIndex)
    
  }
  
  function handleMouseLeave(){
    // console.log(getCurrentIndex)
    setHover(rating)

  }

  return (
    <>
      <div className="star-rating">
        {
          [...Array(noOfStar)].map((_,index)=>{ 
            index +=1;
            return ( <FaStar   key={index} onClick={()=> handleClick(index)} onMouseEnter={()=>{handleMouseEnter(index)}} onMouseLeave={()=>{handleMouseLeave()}} size={40}
            className= { index <= (hover || rating) ? 'active' : 'inactive'} 
            /> )
          })
        }
      </div>
    </>
  )
}

export default App
