import React, { useEffect, useState } from 'react'

const BgChanger = () => {
    const [typeOfColor , setTypeOfColor] = useState('hex')
    const [color , setColor] = useState('#000000')

    function utils(length){
        return Math.floor(Math.random() * length)
    }


    function handleRandomHexColor(){
        const hex = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F"]
        let hexColor = "#"

        for(let i=0; i<6 ; i++){
            hexColor += hex[utils(hex.length)]
        }

        // console.log(hexColor)
        setColor(hexColor)
    }

    function handleRandomRgbColor(){
        const r = utils(256)
        const g = utils(256)
        const b = utils(256)

        // console.log(``)
        setColor(`rgb(${r} , ${g} , ${b})`)
    }

        useEffect(() => {
          if(typeOfColor === 'rgb') handleRandomRgbColor()
          else handleRandomHexColor()
        
         
        },typeOfColor)
        

  return (
    <div style={
        {
            height: "100vh",
            width: "100vw",
            background: color
        }
    } >
        <button onClick={()=> setTypeOfColor('hex')}>Generate HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Generate RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate Random Color</button>
        <div style={
            {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "60px",
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }
        }>
            <h3>{typeOfColor === 'rgb' ? "RGB Color" : "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
      
    </div>
  )
}

export default BgChanger
