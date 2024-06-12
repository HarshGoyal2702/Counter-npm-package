import * as React from 'react'
import { ReactNode } from 'react'

type PropsType = {
    children : React.ReactNode;
}
const Button = ({children} : PropsType) => {
  return (
    <button style={{
        padding:"10px 10px",
        fontSize:"1.2em",
        borderRadius:"5px",
        cursor:"pointer",
        backgroundColor:"blue",
        color:"white"
    }}>
        {children}
    </button>
  )
}

export {Button};
