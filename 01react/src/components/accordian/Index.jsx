import React from 'react'
import {useState} from 'react'
import data from './data'
import './style.css'

const Index = () => {

        // Single Selection
        const [selected , setSelected] = useState(null) 
        const [enableMultiSelection , setEnableMultiSelection] = useState(false)
        const [multipleId , setMultipleId] = useState([])

        function handleSingleSelection(getCurrentId){
            // console.log(getCurrentId)
            // setSelected(getCurrentId) 
            // console.log(selected) 

            // # Closing the Selected Div
            setSelected(getCurrentId === selected ? null : getCurrentId)
        }

        function  handleMultipleSelection(getCurrentId){
            let copyMultiple = [...multipleId]
            const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
            console.log(findIndexOfCurrentId)

            if(findIndexOfCurrentId == -1) copyMultiple.push(getCurrentId)
            else copyMultiple.splice(findIndexOfCurrentId , 1)

            setMultipleId(copyMultiple)

        }

        // console.log(selected , multipleId)


  return (
    <div className='wrapper'>
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordion">
            {data && data.length > 0 ? (
                data.map((dataItem) => (
                    <div className='item'>
                        <div onClick={ enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                            {/* <br /> */}
                            <div className='content'>
                                {/* { niche wale ko break karke hai ye
                                    enableMultiSelection ? multipleId.indexOf(dataItem.id) !== -1 && <div>{dataItem.answer}</div> : selected === dataItem.id &&<div>{dataItem.answer}</div>
                                }  */}
                                {
                                    selected === dataItem.id || multipleId.indexOf(dataItem.id) !== -1 //Selectiong Multiple by justing this singlke line
                                    ? 
                                    <div>{dataItem.answer}</div> :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                ))
            ) : <div>No Data is Present </div>}
        </div>
      
    </div>
  )
}

export default Index

