import React, { useState } from 'react'

const Progress = ({ done, color, bgColor }) => {
   const [style, setStyle] = useState()
   setTimeout(() => {
      const newStyle = {
         opacity: '1',
         width: `${done}%`,
         background: color
      }
      setStyle(newStyle)
   }, 1000)
   return (
      <>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="progress1" style={{ background: bgColor }}>
               <div className="progress-done1" style={style}></div>
            </div>

            <p
               style={{
                  color: color,
                  fontWeight: '500',
                  marginBottom: '0',
                  marginTop: '10px'
               }}
            >
               {done}%
            </p>
         </div>
      </>
   )
}

export default Progress
